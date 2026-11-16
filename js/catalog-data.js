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
   img   — фото; similar: true — на фото внешне такая же соседняя модель
   ========================================================== */

const CATALOG = [
    /* ---------- iPhone ---------- */
    { cat: "iphone", name: "iPhone 18 Pro Max", spec: "256 ГБ, A20 Pro, 6,9″", price: 124990, badge: "Новинка", img: "img/cat/iphone-18-pro-max.jpg" },
    { cat: "iphone", name: "iPhone 18 Pro", spec: "256 ГБ, A20 Pro, 6,3″", price: 112990, badge: "Новинка", img: "img/cat/iphone-18-pro.jpg" },
    { cat: "iphone", name: "iPhone 17 Pro Max", spec: "256 ГБ, A19 Pro, 6,9″", price: 98990, img: "img/cat/iphone-17-pro-max.jpg" },
    { cat: "iphone", name: "iPhone 17 Pro", spec: "256 ГБ, A19 Pro, 6,3″", price: 88990, img: "img/cat/iphone-17-pro.jpg" },
    { cat: "iphone", name: "iPhone Air", spec: "256 ГБ, самый тонкий iPhone", price: 79990, img: "img/cat/iphone-air.jpg" },
    { cat: "iphone", name: "iPhone 17", spec: "256 ГБ, A19, 6,3″", price: 74990, badge: "Хит", img: "img/cat/iphone-17.jpg" },
    { cat: "iphone", name: "iPhone 16", spec: "128 ГБ, A18, 6,1″", price: 59990, img: "img/cat/iphone-16.jpg" },

    /* ---------- MacBook ---------- */
    { cat: "mac", name: "MacBook Neo", spec: "13″, A18 Pro, 8 / 256 ГБ", price: 63990, img: "img/cat/macbook-neo.jpg" },
    { cat: "mac", name: "MacBook Air 13", spec: "M5, 16 / 512 ГБ", price: 106990, badge: "Хит", img: "img/cat/macbook-air-13.jpg" },
    { cat: "mac", name: "MacBook Air 15", spec: "M5, 16 / 512 ГБ", price: 123990, img: "img/cat/macbook-air-15.jpg", similar: true },
    { cat: "mac", name: "MacBook Pro 14", spec: "M5, 16 / 512 ГБ", price: 169990, img: "img/cat/macbook-pro-14.jpg" },
    { cat: "mac", name: "MacBook Pro 16", spec: "M5 Pro, 24 ГБ / 1 ТБ", price: 246990, img: "img/cat/macbook-pro-16.jpg", similar: true },

    /* ---------- iPad ---------- */
    { cat: "ipad", name: "iPad 11", spec: "A16, 128 ГБ, Wi-Fi", price: 39990, img: "img/cat/ipad-11.jpg" },
    { cat: "ipad", name: "iPad Air 11", spec: "M4, 128 ГБ, Wi-Fi", price: 74990, img: "img/cat/ipad-air-11.jpg", similar: true },
    { cat: "ipad", name: "iPad Pro 11", spec: "M5, 256 ГБ, Wi-Fi", price: 104990, img: "img/cat/ipad-pro-11.jpg" },

    /* ---------- Apple Watch ---------- */
    { cat: "watch", name: "Apple Watch Ultra 4", spec: "49 мм, титан", price: 71990, badge: "Новинка", img: "img/cat/watch-ultra-4.jpg", similar: true },
    { cat: "watch", name: "Apple Watch Ultra 3", spec: "49 мм, титан", price: 56990, img: "img/cat/watch-ultra-3.jpg" },
    { cat: "watch", name: "Apple Watch Series 12", spec: "42 мм, алюминий", price: 34990, badge: "Новинка", img: "img/cat/watch-series-12.jpg" },
    { cat: "watch", name: "Apple Watch Series 11", spec: "42 мм, алюминий", price: 31990, img: "img/cat/watch-series-11.jpg" },
    { cat: "watch", name: "Apple Watch SE 3", spec: "40 мм, алюминий", price: 21990, img: "img/cat/watch-se-3.jpg", similar: true },

    /* ---------- AirPods ---------- */
    { cat: "airpods", name: "AirPods Max", spec: "полноразмерные, USB-C", price: 37990, img: "img/cat/airpods-max.jpg" },
    { cat: "airpods", name: "AirPods Pro 3", spec: "шумоподавление, USB-C", price: 17990, badge: "Хит", img: "img/cat/airpods-pro-3.jpg" },
    { cat: "airpods", name: "AirPods 5", spec: "шумоподавление, перевод речи", price: 11990, badge: "Новинка", img: "img/cat/airpods-4.jpg", similar: true },
    { cat: "airpods", name: "AirPods 4 с шумоподавлением", spec: "кейс с беспроводной зарядкой", price: 10990, img: "img/cat/airpods-4.jpg" },
    { cat: "airpods", name: "AirPods 4", spec: "без шумоподавления", price: 9490, img: "img/cat/airpods-4.jpg" },

    /* ---------- Android ---------- */
    { cat: "android", name: "Samsung Galaxy S26 Ultra", spec: "12 / 256 ГБ, S Pen", price: 89990, img: "img/cat/galaxy-s26-ultra.jpg" },
    { cat: "android", name: "Samsung Galaxy S25 Ultra", spec: "12 / 256 ГБ, S Pen", price: 71990, img: "img/cat/galaxy-s25-ultra.jpg" },
    { cat: "android", name: "Xiaomi 17 Ultra", spec: "16 / 512 ГБ, камера Leica", price: 109990, img: "img/cat/xiaomi-17-ultra.jpg" },
    { cat: "android", name: "Xiaomi 17", spec: "12 / 256 ГБ", price: 74990, img: "img/cat/xiaomi-17.jpg" },
    { cat: "android", name: "Redmi Note 17 Pro Max", spec: "батарея 10 000 мА·ч", price: 46990, img: "img/cat/redmi-note-17-pro.jpg", similar: true },
    { cat: "android", name: "Redmi Note 17", spec: "экран 6,99″", price: 21990, img: "img/cat/redmi-note-17.jpg" },
    { cat: "android", name: "Huawei Pura 80", spec: "12 / 256 ГБ, камера XMAGE", price: 42990, img: "img/cat/huawei-pura-80-pro.jpg", similar: true },
    { cat: "android", name: "Huawei nova 15 Pro", spec: "12 / 256 ГБ, батарея 6500 мА·ч", price: 38990, img: "img/cat/huawei-nova-15-pro.jpg" },
    { cat: "android", name: "Huawei nova 15 Max", spec: "батарея, NFC, ИК-порт", price: 24990, img: "img/cat/huawei-nova-15.jpg", similar: true },

    /* ---------- Аксессуары ---------- */
    { cat: "accessories", name: "Защитное стекло с поклейкой", spec: "для iPhone и Android", price: 990, img: "img/cat/screen-protector.jpg" },
    { cat: "accessories", name: "Чехол для iPhone", spec: "силикон или прозрачный, с MagSafe", price: 1490, img: "img/cat/iphone-case.jpg" },
    { cat: "accessories", name: "Сетевой адаптер USB-C", spec: "20 Вт", price: 1990, img: "img/accessories.jpg" },
    { cat: "accessories", name: "Зарядка MagSafe", spec: "беспроводная, USB-C", price: 3490, img: "img/cat/magsafe.jpg" }
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

/* Авторы фото с Wikimedia Commons. Лицензии CC BY и CC BY-SA требуют
   указывать автора и лицензию — список выводится внизу каталога.
   Фото уменьшены по размеру. img/accessories.jpg — фото магазина. */
const PHOTO_CREDITS = {
    "img/cat/iphone-18-pro-max.jpg": { title: "IPhone 18 Pro Max rear.jpg", author: "茅野ふたば", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:IPhone_18_Pro_Max_rear.jpg" },
    "img/cat/iphone-18-pro.jpg": { title: "IPhone 18 Pro - black 01.jpg", author: "Farragutful", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:IPhone_18_Pro_-_black_01.jpg" },
    "img/cat/iphone-17-pro-max.jpg": { title: "Cosmic Orange iPhone 17 Pro Max.jpg", author: "Ahmad Ali Karim", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:Cosmic_Orange_iPhone_17_Pro_Max.jpg" },
    "img/cat/iphone-17-pro.jpg": { title: "IPhone 17 Pro (cropped).jpg", author: "茅野ふたば", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:IPhone_17_Pro_(cropped).jpg" },
    "img/cat/iphone-air.jpg": { title: "IPhone Air (Cloud White) - 1.jpg", author: "Kyu3a", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:IPhone_Air_(Cloud_White)_-_1.jpg" },
    "img/cat/iphone-17.jpg": { title: "Black iPhone 17.jpg", author: "Ahmad Ali Karim", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:Black_iPhone_17.jpg" },
    "img/cat/iphone-16.jpg": { title: "Back of iPhone 16 Blue model.jpg", author: "Kyu3a", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Back_of_iPhone_16_Blue_model.jpg" },
    "img/cat/macbook-neo.jpg": { title: "Macbook Neo Blush model - 1.jpg", author: "Kyu3a", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Macbook_Neo_Blush_model_-_1.jpg" },
    "img/cat/macbook-air-13.jpg": { title: "M5 Macbook Air 13 Sky Blue model.jpg", author: "Kyu3a", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:M5_Macbook_Air_13_Sky_Blue_model.jpg" },
    "img/cat/macbook-air-15.jpg": { title: "MacBook Air (15-inch, M4, Silver).jpg", author: "AzureSaturn", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:MacBook_Air_(15-inch,_M4,_Silver).jpg" },
    "img/cat/macbook-pro-14.jpg": { title: "MacBook Pro (14-inch, M5, Space Black).jpg", author: "AzureSaturn", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:MacBook_Pro_(14-inch,_M5,_Space_Black).jpg" },
    "img/cat/macbook-pro-16.jpg": { title: "MacBook Pro (16-inch, M4 Pro, Silver).jpg", author: "AzureSaturn", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:MacBook_Pro_(16-inch,_M4_Pro,_Silver).jpg" },
    "img/cat/ipad-11.jpg": { title: "A16 iPad with Magic Keyboard on display.png", author: "AzureSaturn", license: "CC BY 4.0", page: "https://commons.wikimedia.org/wiki/File:A16_iPad_with_Magic_Keyboard_on_display.png" },
    "img/cat/ipad-air-11.jpg": { title: "IPad Air 11-inch (M3).jpg", author: "茅野ふたば", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:IPad_Air_11-inch_(M3).jpg" },
    "img/cat/ipad-pro-11.jpg": { title: "IPad Pro (11-inch, M5, Silver) - Backside.jpg", author: "AzureSaturn", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:IPad_Pro_(11-inch,_M5,_Silver)_-_Backside.jpg" },
    "img/cat/watch-ultra-4.jpg": { title: "Apple Watch Ultra 3 Ti Ocean Band (2026) 10.jpg", author: "Gpkp", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Apple_Watch_Ultra_3_Ti_Ocean_Band_(2026)_10.jpg" },
    "img/cat/watch-ultra-3.jpg": { title: "Apple Watch Ultra 3 Ti Ocean Band (2026) 02.jpg", author: "Gpkp", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Apple_Watch_Ultra_3_Ti_Ocean_Band_(2026)_02.jpg" },
    "img/cat/watch-series-12.jpg": { title: "AppleWatchSeries12.jpg", author: "Piperpet", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:AppleWatchSeries12.jpg" },
    "img/cat/watch-series-11.jpg": { title: "Two Apple Watch Series 11 (cropped).png", author: "极客湾Geekerwan", license: "CC BY 3.0", page: "https://commons.wikimedia.org/wiki/File:Two_Apple_Watch_Series_11_(cropped).png" },
    "img/cat/watch-se-3.jpg": { title: "Watch SE (2nd generation).jpg", author: "茅野ふたば", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Watch_SE_(2nd_generation).jpg" },
    "img/cat/airpods-max.jpg": { title: "AirPods Max 2 Midnight model.jpg", author: "Kyu3a", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:AirPods_Max_2_Midnight_model.jpg" },
    "img/cat/airpods-pro-3.jpg": { title: "AirPods Pro 3 with case.jpg", author: "Auggie G", license: "CC BY 3.0", page: "https://commons.wikimedia.org/wiki/File:AirPods_Pro_3_with_case.jpg" },
    "img/cat/airpods-4.jpg": { title: "Airpods 4.jpg", author: "AppleFans 1", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:Airpods_4.jpg" },
    "img/cat/galaxy-s26-ultra.jpg": { title: "Galaxy S26 Ultra - 1.jpg", author: "Kyu3a", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Galaxy_S26_Ultra_-_1.jpg" },
    "img/cat/galaxy-s25-ultra.jpg": { title: "Rear view of the Samsung Galaxy S25 Ultra smartphone.jpg", author: "HuangWending18072009", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:Rear_view_of_the_Samsung_Galaxy_S25_Ultra_smartphone.jpg" },
    "img/cat/xiaomi-17-ultra.jpg": { title: "Xiaomi 17 Ultra rear.jpg", author: "茅野ふたば", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Xiaomi_17_Ultra_rear.jpg" },
    "img/cat/xiaomi-17.jpg": { title: "Xiaomi 17 backside Ice Melting Blue.jpg", author: "茅野ふたば", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Xiaomi_17_backside_Ice_Melting_Blue.jpg" },
    "img/cat/redmi-note-17-pro.jpg": { title: "Redmi Note 17 Pro rear.jpg", author: "茅野ふたば", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Redmi_Note_17_Pro_rear.jpg" },
    "img/cat/redmi-note-17.jpg": { title: "Redmi Note 17 rear.jpg", author: "茅野ふたば", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Redmi_Note_17_rear.jpg" },
    "img/cat/huawei-pura-80-pro.jpg": { title: "Huawei Pura 80 Pro backside.jpg", author: "茅野ふたば", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Huawei_Pura_80_Pro_backside.jpg" },
    "img/cat/huawei-nova-15-pro.jpg": { title: "Huawei nova 15 Pro rear.jpg", author: "茅野ふたば", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Huawei_nova_15_Pro_rear.jpg" },
    "img/cat/huawei-nova-15.jpg": { title: "Huawei nova 15 rear.jpg", author: "茅野ふたば", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Huawei_nova_15_rear.jpg" },
    "img/cat/screen-protector.jpg": { title: "Screen protector.png", author: "unwire.hk", license: "Public domain", page: "https://commons.wikimedia.org/wiki/File:Screen_protector.png" },
    "img/cat/iphone-case.jpg": { title: "Apple iPhone 17 Silicone Case (Black).jpg", author: "茅野ふたば", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Apple_iPhone_17_Silicone_Case_(Black).jpg" },
    "img/cat/magsafe.jpg": { title: "MagSafe and USB-C Cable Charger for iPhone.jpg", author: "James Tamim", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:MagSafe_and_USB-C_Cable_Charger_for_iPhone.jpg" }
};
