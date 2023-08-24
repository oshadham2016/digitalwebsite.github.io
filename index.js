gsap.fromTo(
    ".wrapper",
    { opacity: 1 },
    {
        opacity: 0,
        display: "none",
        // duration: 1.5,
        delay: 2.8,
    }
);

gsap.fromTo(
    ".logo-name",
    {
        y: 50,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
    }
);


window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
});
const typed = new Typed(".sec-text", {
    strings: ["Graphic Designer", "Video Editor", "Photographer", "Web Developer"],
    backSpeed: 100,
    typeSpeed: 100,
    loop: true
});

/*==========Back to top ==========*/
const toTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
})


/*============ form submit ================*/

function formsubmit() {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const subject = document.getElementById("subject").value;
    const area = document.getElementById("area").value;
    const list = document.getElementById("list").value;

    const url = "https://wa.me/918889350214?text=Hi%20There!" +
        "Name: " + name + "%0a" + "City: " + city + "%0a" + "subject: " + subject + "%0a" + "area: " + area + "%0a" + "Select Service: " + list;

    window.open(url, "_blank").focus();

};
