function login() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (nombre && email && pass) {
    localStorage.setItem("nombreUsuario", nombre);
    window.location.href = "menu.html";
  } else {
    alert("Por favor completa todos los campos");
  }
}
