/* ==========================================================
   Apple Mind — формы и переключатели
   Формы работают «для вида»: данные никуда не отправляются
   и нигде не сохраняются, после проверки полей просто
   показывается сообщение об успешной заявке.
   ========================================================== */

function sendLead() {
    return new Promise((resolve) => setTimeout(() => resolve(true), 600));
}

/* Галочка согласия на обработку персональных данных */
function hasConsent(form) {
    const box = form.querySelector('input[name="consent"]');
    if (!box || box.checked) return true;

    box.closest(".consent").classList.add("is-invalid");
    return false;
}

document.querySelectorAll('input[name="consent"]').forEach((box) => {
    box.addEventListener("change", () => box.closest(".consent").classList.remove("is-invalid"));
});

/* ---------- Телефон: маска +7 (900) 000-00-00 ---------- */

function formatPhone(value) {
    let digits = value.replace(/\D/g, "");

    if (digits.startsWith("8")) {
        digits = "7" + digits.slice(1);
    }
    if (!digits.startsWith("7")) {
        digits = "7" + digits;
    }
    digits = digits.slice(0, 11);

    const parts = [
        digits.slice(1, 4),
        digits.slice(4, 7),
        digits.slice(7, 9),
        digits.slice(9, 11)
    ];

    let result = "+7";
    if (parts[0]) result += " (" + parts[0];
    if (parts[0].length === 3) result += ")";
    if (parts[1]) result += " " + parts[1];
    if (parts[2]) result += "-" + parts[2];
    if (parts[3]) result += "-" + parts[3];

    return result;
}

function isPhoneValid(value) {
    return value.replace(/\D/g, "").length === 11;
}

document.querySelectorAll('input[type="tel"]').forEach((input) => {
    input.addEventListener("input", () => {
        /* Если после «+7» начали набирать 8 или 7 — игнорируем, это код страны */
        const national = input.value.startsWith("+7") ? input.value.slice(2).replace(/\D/g, "") : null;
        if (national === "7" || national === "8") {
            input.value = "+7";
            return;
        }

        input.value = formatPhone(input.value);
        input.classList.remove("is-invalid");
    });

    input.addEventListener("focus", () => {
        if (!input.value) input.value = "+7";
    });
});

function showError(form, text) {
    const box = form.querySelector(".form__error");
    box.textContent = text;
    box.hidden = !text;
}

/* ---------- Главная форма: Купить / Починить ---------- */

const request = document.querySelector("#request");
const form = document.querySelector("#request-form");
const done = request.querySelector(".request__done");
const tabs = request.querySelectorAll(".request__tab");
const submitBtn = form.querySelector('button[type="submit"]');

function setMode(mode) {
    form.elements.mode.value = mode;

    tabs.forEach((tab) => {
        const active = tab.dataset.mode === mode;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
    });

    form.querySelectorAll("[data-for]").forEach((group) => {
        group.hidden = group.dataset.for !== mode;
    });

    submitBtn.textContent = submitBtn.dataset["label" + (mode === "buy" ? "Buy" : "Repair")];
}

tabs.forEach((tab) => {
    tab.addEventListener("click", () => setMode(tab.dataset.mode));
});

function openForm(mode) {
    done.hidden = true;
    form.hidden = false;
    setMode(mode);
    request.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => form.elements.name.focus({ preventScroll: true }), 500);
}

/* Кнопки «Узнать цену» в каталоге подставляют товар в форму */
document.querySelectorAll("[data-pick]").forEach((button) => {
    button.addEventListener("click", () => {
        const select = form.elements.device;
        const value = button.dataset.pick;

        if (![...select.options].some((option) => option.value === value)) {
            select.add(new Option(value, value));
        }
        select.value = value;
        openForm("buy");
    });
});

document.querySelectorAll("[data-repair]").forEach((button) => {
    button.addEventListener("click", () => openForm("repair"));
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = form.elements.name;
    const phone = form.elements.phone;
    let error = "";

    name.classList.toggle("is-invalid", !name.value.trim());
    phone.classList.toggle("is-invalid", !isPhoneValid(phone.value));

    if (!name.value.trim()) {
        error = "Напишите, как к вам обращаться.";
    } else if (!isPhoneValid(phone.value)) {
        error = "Проверьте номер: нужно 10 цифр после +7.";
    }

    if (!error && !hasConsent(form)) {
        error = "Поставьте галочку согласия на обработку данных.";
    }

    showError(form, error);
    if (error) return;

    const data = Object.fromEntries(new FormData(form));
    submitBtn.disabled = true;

    const ok = await sendLead(data);
    submitBtn.disabled = false;

    if (!ok) {
        showError(form, "Заявка не отправилась. Позвоните нам: +7 910 913-88-77.");
        return;
    }

    done.querySelector("[data-phone]").textContent = phone.value;
    form.hidden = true;
    done.hidden = false;
});

done.querySelector("[data-reset]").addEventListener("click", () => {
    form.reset();
    form.hidden = false;
    done.hidden = true;
    setMode("buy");
});

/* ---------- Обратный звонок в контактах ---------- */

const callback = document.querySelector("#callback-form");

callback.addEventListener("submit", async (event) => {
    event.preventDefault();

    const phone = callback.elements.phone;

    if (!isPhoneValid(phone.value)) {
        phone.classList.add("is-invalid");
        showError(callback, "Проверьте номер: нужно 10 цифр после +7.");
        return;
    }

    if (!hasConsent(callback)) {
        showError(callback, "Поставьте галочку согласия на обработку данных.");
        return;
    }

    showError(callback, "");
    const ok = await sendLead({ mode: "callback", phone: phone.value });

    if (ok) {
        callback.innerHTML = '<p class="callback__title">Перезвоним на ' + phone.value + "</p>";
    } else {
        showError(callback, "Не получилось отправить. Позвоните нам: +7 910 913-88-77.");
    }
});

/* ---------- Год в подвале ---------- */

document.querySelector("[data-year]").textContent = new Date().getFullYear();
