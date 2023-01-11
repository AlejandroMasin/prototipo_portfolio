// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

  const login = document.getElementById("login");
  login.addEventListener("click", myFunction);

  function myFunction() {
    modalLogin()
  };

  //Borrar hash de la url de los anclas
    window.onhashchange = function () {
      window.history.pushState('', document.title, window.location.pathname)
    }

// Add your javascript here
  document.addEventListener("DOMContentLoaded", () => {
    let boton = document.getElementById("crearpdf");
    let container = document.getElementById("contenedor");

    boton.addEventListener("click", event => {
        event.preventDefault();
        // boton.style.display = "none";
        window.print();
    }, false);

    container.addEventListener("click", event => {
        boton.style.display = "initial";
    }, false);

}, false);

$(document).ready(function () { irArriba(); }); //Hacia arriba

/* Boton ir para arriba */
function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}

/* Modal sweetalert login */

function modalLogin() {
  Swal.fire({
    title: 'Login Form',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Sign in',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value
      const password = Swal.getPopup().querySelector('#password').value
      if (!login || !password) {
        Swal.showValidationMessage(`Please enter login and password`)
      }
      return { login: login, password: password }
    }
  }).then((result) => {
    Swal.fire(`
      Login: ${result.value.login}
      Password: ${result.value.password}
    `.trim())
  })
}