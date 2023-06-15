// Even Click pada gambar maka hilang animasinya

const img = document.querySelector('body .head .headgambar img');
const span = document.querySelector('body div.head .headgambar span.warna1');
img.addEventListener('click', function () {
    span.classList.toggle('warna1');
});