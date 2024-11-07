function toggleLanguage() {
    const htmlTag = document.documentElement;
    if (htmlTag.lang === "ar") {
        htmlTag.lang = "en";
        htmlTag.dir = "ltr";
        document.querySelector(".top-bar marquee").innerText = "Order Now";
        document.querySelector("#products h2").innerText = "Products";
        document.querySelector("#examples h2").innerText = "Examples";
        document.querySelector("#services h2").innerText = "Our Services";
        document.querySelector("#contact h2").innerText = "Contact Us";
    } else {
        htmlTag.lang = "ar";
        htmlTag.dir = "rtl";
        document.querySelector(".top-bar marquee").innerText = "اطلب الآن";
        document.querySelector("#products h2").innerText = "المنتجات";
        document.querySelector("#examples h2").innerText = "الأمثلة";
        document.querySelector("#services h2").innerText = "خدماتنا";
        document.querySelector("#contact h2").innerText = "تواصل معنا";
    }
}

window.onload = function() {
    document.querySelector('.whatsapp-button').classList.add('pulsing');
};

