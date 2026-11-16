/* ==========================================================
   Каталог Apple Mind — фильтры, поиск, сортировка, заказ
   Форма заказа работает «для вида»: данные никуда не отправляются.
   Товары и цены — в js/catalog-data.js.
   ========================================================== */

(function () {
    const grid = document.querySelector("[data-grid]");
    const chipsBox = document.querySelector("[data-chips]");
    const countBox = document.querySelector("[data-count]");
    const emptyBox = document.querySelector("[data-empty]");
    const search = document.querySelector("#cat-search");
    const sort = document.querySelector("#cat-sort");

    const ORDER = Object.keys(CATEGORIES).filter((key) => key !== "all");

    const state = {
        cat: CATEGORIES[location.hash.slice(1)] ? location.hash.slice(1) : "all",
        query: "",
        sort: "default"
    };

    function formatPrice(value) {
        return "от " + value.toLocaleString("ru-RU") + " ₽";
    }

    function plural(n, forms) {
        const mod10 = n % 10;
        const mod100 = n % 100;
        if (mod10 === 1 && mod100 !== 11) return forms[0];
        if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
        return forms[2];
    }

    function escapeHtml(text) {
        return text.replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
    }

    /* ---------- Разделы ---------- */

    function renderChips() {
        chipsBox.innerHTML = Object.entries(CATEGORIES).map(([key, label]) => {
            const count = key === "all" ? CATALOG.length : CATALOG.filter((item) => item.cat === key).length;
            const active = key === state.cat;
            return '<button class="cat-chip' + (active ? " is-active" : "") + '" type="button" data-cat="' + key + '" aria-pressed="' + active + '">' +
                label + ' <span>' + count + "</span></button>";
        }).join("");
    }

    chipsBox.addEventListener("click", (event) => {
        const chip = event.target.closest("[data-cat]");
        if (!chip) return;

        state.cat = chip.dataset.cat;
        history.replaceState(null, "", state.cat === "all" ? location.pathname : "#" + state.cat);
        renderChips();
        renderGrid();
    });

    /* ---------- Товары ---------- */

    function visibleItems() {
        const query = state.query.trim().toLowerCase();

        let items = CATALOG.filter((item) => {
            if (state.cat !== "all" && item.cat !== state.cat) return false;
            if (!query) return true;
            return (item.name + " " + item.spec).toLowerCase().includes(query);
        });

        if (state.sort === "cheap") {
            items = items.slice().sort((a, b) => a.price - b.price);
        } else if (state.sort === "expensive") {
            items = items.slice().sort((a, b) => b.price - a.price);
        } else {
            items = items.slice().sort((a, b) => ORDER.indexOf(a.cat) - ORDER.indexOf(b.cat));
        }

        return items;
    }

    function renderGrid() {
        const items = visibleItems();

        grid.innerHTML = items.map((item) =>
            '<li class="cat-item">' +
                '<p class="cat-item__top">' +
                    '<span class="cat-item__cat">' + CATEGORIES[item.cat] + "</span>" +
                    (item.badge ? '<span class="cat-item__badge">' + escapeHtml(item.badge) + "</span>" : "") +
                "</p>" +
                '<h2 class="cat-item__name">' + escapeHtml(item.name) + "</h2>" +
                '<p class="cat-item__spec">' + escapeHtml(item.spec) + "</p>" +
                '<p class="cat-item__price">' + formatPrice(item.price) + "</p>" +
                '<button class="btn btn--soft cat-item__btn" type="button" data-order="' + escapeHtml(item.name + ", " + item.spec) + '" data-price="' + item.price + '">Заказать</button>' +
            "</li>"
        ).join("");

        countBox.textContent = items.length
            ? items.length + " " + plural(items.length, ["товар", "товара", "товаров"])
            : "";
        emptyBox.hidden = items.length > 0;
    }

    search.addEventListener("input", () => {
        state.query = search.value;
        renderGrid();
    });

    sort.addEventListener("change", () => {
        state.sort = sort.value;
        renderGrid();
    });

    /* переход по ссылке вида catalog.html#iphone */
    window.addEventListener("hashchange", () => {
        const key = location.hash.slice(1);
        state.cat = CATEGORIES[key] ? key : "all";
        renderChips();
        renderGrid();
    });

    renderChips();
    renderGrid();

    /* ---------- Телефон: маска +7 (900) 000-00-00 ---------- */

    function formatPhone(value) {
        let digits = value.replace(/\D/g, "");

        if (digits.startsWith("8")) digits = "7" + digits.slice(1);
        if (!digits.startsWith("7")) digits = "7" + digits;
        digits = digits.slice(0, 11);

        const p = [digits.slice(1, 4), digits.slice(4, 7), digits.slice(7, 9), digits.slice(9, 11)];
        let result = "+7";
        if (p[0]) result += " (" + p[0];
        if (p[0].length === 3) result += ")";
        if (p[1]) result += " " + p[1];
        if (p[2]) result += "-" + p[2];
        if (p[3]) result += "-" + p[3];
        return result;
    }

    function isPhoneValid(value) {
        return value.replace(/\D/g, "").length === 11;
    }

    /* ---------- Окно заказа ---------- */

    const dialog = document.querySelector("#order");
    const form = document.querySelector("#order-form");
    const done = dialog.querySelector(".order__done");
    const errorBox = form.querySelector(".form__error");
    const phone = form.elements.phone;
    const consentBox = form.elements.consent;

    phone.addEventListener("focus", () => {
        if (!phone.value) phone.value = "+7";
    });

    phone.addEventListener("input", () => {
        const national = phone.value.startsWith("+7") ? phone.value.slice(2).replace(/\D/g, "") : null;
        if (national === "7" || national === "8") {
            phone.value = "+7";
            return;
        }
        phone.value = formatPhone(phone.value);
        phone.classList.remove("is-invalid");
    });

    consentBox.addEventListener("change", () => consentBox.closest(".consent").classList.remove("is-invalid"));

    function openOrder(product, price) {
        form.reset();
        form.hidden = false;
        done.hidden = true;
        errorBox.hidden = true;
        form.querySelectorAll(".is-invalid").forEach((el) => el.classList.remove("is-invalid"));

        form.elements.product.value = product;
        dialog.querySelector("[data-product]").textContent = product;
        dialog.querySelector("[data-product-price]").textContent = price ? formatPrice(Number(price)) : "";

        if (typeof dialog.showModal === "function") {
            dialog.showModal();
        } else {
            dialog.setAttribute("open", "");
        }
        form.elements.name.focus();
    }

    function closeOrder() {
        if (typeof dialog.close === "function") {
            dialog.close();
        } else {
            dialog.removeAttribute("open");
        }
    }

    document.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-order]");
        if (trigger) openOrder(trigger.dataset.order, trigger.dataset.price);
    });

    dialog.addEventListener("click", (event) => {
        /* клик по затемнению вокруг окна или по кнопке закрытия */
        if (event.target === dialog || event.target.closest("[data-close]")) closeOrder();
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = form.elements.name;
        let error = "";

        name.classList.toggle("is-invalid", !name.value.trim());
        phone.classList.toggle("is-invalid", !isPhoneValid(phone.value));

        if (!name.value.trim()) {
            error = "Напишите, как к вам обращаться.";
        } else if (!isPhoneValid(phone.value)) {
            error = "Проверьте номер: нужно 10 цифр после +7.";
        } else if (!consentBox.checked) {
            consentBox.closest(".consent").classList.add("is-invalid");
            error = "Поставьте галочку согласия на обработку данных.";
        }

        errorBox.textContent = error;
        errorBox.hidden = !error;
        if (error) return;

        const button = form.querySelector('button[type="submit"]');
        button.disabled = true;

        /* имитация отправки: данные никуда не уходят */
        setTimeout(() => {
            button.disabled = false;
            dialog.querySelector("[data-done-phone]").textContent = phone.value;
            form.hidden = true;
            done.hidden = false;
        }, 600);
    });
})();
