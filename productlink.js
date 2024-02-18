import * as VR from './script.js';
window.addEventListener('DOMContentLoaded', () => {
    var productY = document.getElementById('products').getBoundingClientRect().y - 50;
    for (const link of document.getElementsByClassName('p-link')) {
        link.addEventListener('click', () => {
            closeCanvas();
            window.scroll(0, productY)
        });
    }
});