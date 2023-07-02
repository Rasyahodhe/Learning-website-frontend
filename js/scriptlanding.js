// Even Click pada gambar maka hilang animasinya

const img = document.querySelector('body .head .headgambar img');
const span = document.querySelector('body div.head .headgambar span.warna1');
img.addEventListener('click', function () {
    span.classList.toggle('warna1');
});


const thome = document.getElementById('home');
thome.addEventListener('click', function () {
    const ambilangka = Math.round(Math.random() * 255 + 1);
    console.log(ambilangka);
    document.body.style.backgroundColor = 'rgb(100,100,' + ambilangka + ')';
});