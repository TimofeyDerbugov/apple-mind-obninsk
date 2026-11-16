/* ==========================================================
   Каталог Apple Mind — товары и цены
   Цены ориентировочные: средние по рынку РФ на ноябрь 2026
   (подборки цен click-or-die.ru, appleinsider.ru, hi-tech.mail.ru,
   price.ru, рекомендованные цены дистрибьюторов).
   Перед запуском сверьте цены с магазином и меняйте прямо здесь.

   cat   — раздел: iphone, mac, ipad, watch, airpods, android, accessories
   name  — название
   spec  — коротко о версии
   price — цена «от», в рублях
   badge — необязательная метка (например, «Новинка»)
   ========================================================== */

const CATALOG = [
    /* ---------- iPhone ---------- */
    { cat: "iphone", name: "iPhone 18 Pro Max", spec: "256 ГБ, A20 Pro, 6,9″", price: 124990, badge: "Новинка" },
    { cat: "iphone", name: "iPhone 18 Pro", spec: "256 ГБ, A20 Pro, 6,3″", price: 112990, badge: "Новинка" },
    { cat: "iphone", name: "iPhone 17 Pro Max", spec: "256 ГБ, A19 Pro, 6,9″", price: 98990 },
    { cat: "iphone", name: "iPhone 17 Pro", spec: "256 ГБ, A19 Pro, 6,3″", price: 88990 },
    { cat: "iphone", name: "iPhone Air", spec: "256 ГБ, самый тонкий iPhone", price: 79990 },
    { cat: "iphone", name: "iPhone 17", spec: "256 ГБ, A19, 6,3″", price: 74990, badge: "Хит" },
    { cat: "iphone", name: "iPhone 16", spec: "128 ГБ, A18, 6,1″", price: 59990 },

    /* ---------- MacBook ---------- */
    { cat: "mac", name: "MacBook Neo", spec: "13″, A18 Pro, 8 / 256 ГБ", price: 63990 },
    { cat: "mac", name: "MacBook Air 13", spec: "M5, 16 / 512 ГБ", price: 106990, badge: "Хит" },
    { cat: "mac", name: "MacBook Air 15", spec: "M5, 16 / 512 ГБ", price: 123990 },
    { cat: "mac", name: "MacBook Pro 14", spec: "M5, 16 / 512 ГБ", price: 169990 },
    { cat: "mac", name: "MacBook Pro 16", spec: "M5 Pro, 24 ГБ / 1 ТБ", price: 246990 },

    /* ---------- iPad ---------- */
    { cat: "ipad", name: "iPad 11", spec: "A16, 128 ГБ, Wi-Fi", price: 39990 },
    { cat: "ipad", name: "iPad Air 11", spec: "M4, 128 ГБ, Wi-Fi", price: 74990 },
    { cat: "ipad", name: "iPad Pro 11", spec: "M5, 256 ГБ, Wi-Fi", price: 104990 },

    /* ---------- Apple Watch ---------- */
    { cat: "watch", name: "Apple Watch Ultra 4", spec: "49 мм, титан", price: 71990, badge: "Новинка" },
    { cat: "watch", name: "Apple Watch Ultra 3", spec: "49 мм, титан", price: 56990 },
    { cat: "watch", name: "Apple Watch Series 12", spec: "42 мм, алюминий", price: 34990, badge: "Новинка" },
    { cat: "watch", name: "Apple Watch Series 11", spec: "42 мм, алюминий", price: 31990 },
    { cat: "watch", name: "Apple Watch SE 3", spec: "40 мм, алюминий", price: 21990 },

    /* ---------- AirPods ---------- */
    { cat: "airpods", name: "AirPods Max", spec: "полноразмерные, USB-C", price: 37990 },
    { cat: "airpods", name: "AirPods Pro 3", spec: "шумоподавление, USB-C", price: 17990, badge: "Хит" },
    { cat: "airpods", name: "AirPods 5", spec: "шумоподавление, перевод речи", price: 11990, badge: "Новинка" },
    { cat: "airpods", name: "AirPods 4 с шумоподавлением", spec: "кейс с беспроводной зарядкой", price: 10990 },
    { cat: "airpods", name: "AirPods 4", spec: "без шумоподавления", price: 9490 },

    /* ---------- Android ---------- */
    { cat: "android", name: "Samsung Galaxy S26 Ultra", spec: "12 / 256 ГБ, S Pen", price: 89990 },
    { cat: "android", name: "Samsung Galaxy S25 Ultra", spec: "12 / 256 ГБ, S Pen", price: 71990 },
    { cat: "android", name: "Xiaomi 17 Ultra", spec: "16 / 512 ГБ, камера Leica", price: 109990 },
    { cat: "android", name: "Xiaomi 17", spec: "12 / 256 ГБ", price: 74990 },
    { cat: "android", name: "Redmi Note 17 Pro Max", spec: "батарея 10 000 мА·ч", price: 46990 },
    { cat: "android", name: "Redmi Note 17", spec: "экран 6,99″", price: 21990 },
    { cat: "android", name: "Huawei Pura 80", spec: "12 / 256 ГБ, камера XMAGE", price: 42990 },
    { cat: "android", name: "Huawei nova 15 Pro", spec: "12 / 256 ГБ, батарея 6500 мА·ч", price: 38990 },
    { cat: "android", name: "Huawei nova 15 Max", spec: "батарея, NFC, ИК-порт", price: 24990 },

    /* ---------- Аксессуары ---------- */
    { cat: "accessories", name: "Защитное стекло с поклейкой", spec: "для iPhone и Android", price: 990 },
    { cat: "accessories", name: "Чехол для iPhone", spec: "силикон или прозрачный, с MagSafe", price: 1490 },
    { cat: "accessories", name: "Сетевой адаптер USB-C", spec: "20 Вт", price: 1990 },
    { cat: "accessories", name: "Зарядка MagSafe", spec: "беспроводная, USB-C", price: 3490 }
];

const CATEGORIES = {
    all: "Всё",
    iphone: "iPhone",
    mac: "MacBook",
    ipad: "iPad",
    watch: "Apple Watch",
    airpods: "AirPods",
    android: "Android",
    accessories: "Аксессуары"
};
