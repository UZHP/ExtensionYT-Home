var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disappear");
};

let spanTop = document.querySelector(".scrollTop");

window.onscroll = function () {
    // console.log(this.scrollY);;
    if (this.scrollY >= 515) {
        spanTop.classList.add("show");
    } else {
        spanTop.classList.remove("show");
    };
};

spanTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

let headerTop = document.querySelector(".headOfPage");

window.onscroll = function () {
    if (this.scrollY >= 515) {
        headerTop.classList.add("change");
    } else {
        headerTop.classList.remove("change");
    };
};

let bottomHeader = document.querySelector(".bottomTop");

window.onscroll = function () {
    if (this.scrollY >= 515) {
        bottomHeader.classList.add("showTop");
    } else {
        bottomHeader.classList.remove("showTop");
    };
};