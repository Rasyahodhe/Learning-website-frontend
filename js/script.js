const img = document.querySelector(".container .head img");
const h1 = document.querySelector(".container .head .navinfo h1");
img.addEventListener("click", function () {
    h1.style.color = "red";
});

const lipertama = document.querySelector(".container .head .navinfo ul #konten_home")
const apertama = document.querySelector(".container .head .navinfo ul li a");
apertama.addEventListener("click", function () {
    lipertama.classList.toggle("perbesarspan");
});
lipertama.addEventListener("click", function () {
    lipertama.classList.toggle("perbesarspan");
})
