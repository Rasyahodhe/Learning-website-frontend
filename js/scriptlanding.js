const container = document.querySelector('body div.container');
const divcontent = document.querySelector('body div.container div.content');
const divbaru = document.createElement('div');
const teksdivbaru = document.createTextNode('INI DIVBARU');
divbaru.appendChild(teksdivbaru);
divbaru.style.color = "red";
// divbaru.style.marginTop = '50px';
container.appendChild(divbaru);
// container.insertBefore(divcontent, divbaru);

// Even Click pada gambar maka hilang animasinya

const img = document.querySelector('body .head .headgambar img');
const span = document.querySelector('body div.head .headgambar span.warna1');
img.addEventListener('click', function () {
    span.classList.toggle('warna1');
});