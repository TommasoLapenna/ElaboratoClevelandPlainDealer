let prevScrollPosition = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPosition > currentScrollPos) {
        document.getElementById("nav-container").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollPosition = currentScrollPos;
}