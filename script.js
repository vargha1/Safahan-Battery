window.addEventListener('scroll', (event) => {
    if (document.body.scrollTop > 42 || document.documentElement.scrollTop > 42) {
        document.getElementById("header2").classList.remove("top-[42px]");
        document.querySelector('#header2 nav').classList.add("top-[10px]");
    } else if ((document.body.scrollTop > 0 && document.body.scrollTop < 42) || (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 42)) {
        document.getElementById("header2").classList.add("top-[42px]");
        document.querySelector('#header2 nav').classList.remove("top-[10px]");
        document.getElementById("header2").classList.add("fixed");
    }
});
window.addEventListener('DOMContentLoaded', () => {
    function preventScroll(e) {
        e.preventDefault();
        e.stopPropagation();

        return false;
    }
    let offCanvasH = document.getElementById("offcanvasheader");
    let offCanvas = document.getElementById("offcanvas");
    let cover = document.getElementById('cover')
    offCanvasH.addEventListener('click', () => {
        offCanvas.classList.remove("-left-[150%]");
        cover.classList.remove('hidden');
        document.addEventListener('wheel', preventScroll, { passive: false });
    });
    cover.addEventListener('click', () => {
        offCanvas.classList.add('-left-[150%]');
        cover.classList.add('hidden');
        document.removeEventListener('wheel', preventScroll, { passive: false });
    });
});
