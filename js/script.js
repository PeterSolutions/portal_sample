let btnLogin = document.getElementById('btnlogin');
let tarjetaLogin = document.querySelector('div.tarjeta-login');
let fondoOscuro = document.querySelector('.fondo-oscuro');
let btnCerrar = document.querySelector('.cerrar-ventana');


btnLogin.addEventListener('click', activarVentana);
btnCerrar.addEventListener('click', cerrarVentana);

function  activarVentana(e) {
    e.preventDefault();
    setTimeout(() => {
        fondoOscuro.style.display = 'block';
    }, 200);
    setTimeout(() => {
        tarjetaLogin.style.display = 'block';
    }, 300);
}

function cerrarVentana(){
    tarjetaLogin.style.display = 'none';
    fondoOscuro.style.display = 'none';
}