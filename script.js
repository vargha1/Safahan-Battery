window.addEventListener('scroll', (event) => {
    if (document.body.scrollTop > 42 || document.documentElement.scrollTop > 42) {
        document.getElementById("header2").classList.remove("top-[42px]");
    } else if ((document.body.scrollTop > 0 && document.body.scrollTop < 42) || (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 42)) {
        document.getElementById("header2").classList.add("top-[42px]");
        document.getElementById("header2").classList.add("fixed");
    }
});

function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
}
function closeCanvas() {
    offCanvas.classList.add('-right-[150%]');
    cover.classList.add('hidden');
    document.removeEventListener('wheel', preventScroll, { passive: false });
}

let offCanvasH = document.getElementById("offcanvasheader");
let offCanvas = document.getElementById("offcanvas");
let cover = document.getElementById('cover')
offCanvasH.addEventListener('click', () => {
    offCanvas.classList.remove("-right-[150%]");
    cover.classList.remove('hidden');
    document.addEventListener('wheel', preventScroll, { passive: false });
});
cover.addEventListener('click', () => {
    closeCanvas();
});
document.getElementById('close-btn').addEventListener('click', () => {
    closeCanvas();
});

for (const link of document.getElementsByClassName('p-link')) {
    link.addEventListener('click', () => {
        closeCanvas();
    });
}

for (const drawer of document.getElementsByClassName('drawer')) {
    drawer.addEventListener('click', function () {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}