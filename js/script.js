let CURRENT_PAGE = 0;

let scrolling = false;
let timer;
let currentScrollPosition = window.scrollY;

document.addEventListener("scroll", scroll, false);

function scroll() {
    console.log("Fired!");
    document.removeEventListener("scroll", scroll, false);

    console.log(Math.round(window.scrollY), Math.round(currentScrollPosition));

    window.setTimeout(doScroll, 100);

    window.setTimeout(() => {
        document.addEventListener("scroll", scroll, false);
        currentScrollPosition = window.scrollY;
    }, 750);

}

function doScroll() {
    if (window.scrollY > currentScrollPosition) {
        CURRENT_PAGE++;
        // move down
        scrollTo({
            top: CURRENT_PAGE * window.visualViewport.height,
            behavior: "smooth"
        });
        console.log("Going down");
    }
    else {
        CURRENT_PAGE--;
        // move up
        scrollTo({
            top: CURRENT_PAGE * window.visualViewport.height,
            behavior: "smooth"
        });
        console.log("Going up");
    }
}