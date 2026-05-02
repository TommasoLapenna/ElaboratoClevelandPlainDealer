// Hide-on-scroll top bar
let prevScrollPosition = window.scrollY;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollPosition > currentScrollPos) {
        document.getElementById("nav-container").style.top = "0";
    } else {
        document.getElementById("nav-container").style.top = "-60px";
    }
    prevScrollPosition = currentScrollPos;
}