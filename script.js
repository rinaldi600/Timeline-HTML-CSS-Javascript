const timelineList = document.querySelectorAll(".timeline");



function elementInView(element) {
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    return isInViewport;
}


window.addEventListener("scroll",function () {
    timelineList.forEach(function (e) {
        if (elementInView(e)) {
            e.classList.add("add");
        }
    })
});