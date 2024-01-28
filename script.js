window.addEventListener('scroll', (event) => {
    if (document.body.scrollTop > 42 || document.documentElement.scrollTop > 42) {
        document.getElementById("header2").classList.remove("top-[42px]");
        document.getElementById("logo").classList.remove("-top-[20px]");
        document.getElementById("logo").classList.add("-top-[6px]");
        document.querySelector('#header2 nav').classList.add("top-[10px]");
    } else if ((document.body.scrollTop > 0 && document.body.scrollTop < 42) || (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 42)) {
        document.getElementById("header2").classList.add("top-[42px]");
        document.getElementById("logo").classList.add("-top-[20px]");
        document.getElementById("logo").classList.remove("-top-[6px]");
        document.querySelector('#header2 nav').classList.remove("top-[10px]");
        document.getElementById("header2").classList.add("fixed");
    }
});