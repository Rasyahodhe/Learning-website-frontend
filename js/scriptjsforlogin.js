const ambillogin = document.getElementById('login');
const ambilsignup = document.getElementById('signup');

function prosesuser() {
    const user = 'laode';
    const pass = '123';
    let ambiluser = document.getElementById('username').value;
    let ambilpass = document.getElementById('password').value;
    if (ambiluser === user && ambilpass === pass) {
        window.location.replace('../html/Layouttampilan.html');
    } else {
        alert('Kesalahan User dan password');
    }
}



ambillogin.addEventListener('click', prosesuser);