// when someone clicks the hamburger button,
// if the nav is closed, open it
// if the nav is open, close it

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
    } else {
        nav.setAttribute("data-visible", false);
    }
    
    console.log(visiblity);
})
