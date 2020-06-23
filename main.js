
function slide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".na");
    const navlinks = document.querySelectorAll(".na li");
    burger.addEventListener("click", () => {
        nav.classList.toggle("na-active");
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.8s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle("toggle");
    });
}
slide();
$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()> 700);
});


  