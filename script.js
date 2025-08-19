// Esperamos que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que se recargue la página

    const username = form.querySelector("input[type='text']").value;
    const password = form.querySelector("input[type='password']").value;

    // Validaciones simples
    if (username.trim() === "" || password.trim() === "") {
      alert("Por favor, completa todos los campos ✏️");
      return;
    }

    // Ejemplo básico de login "falso"
    if (username === "admin" && password === "1234") {
      alert("✅ Login exitoso, bienvenido " + username + "!");
      // Aquí podrías redirigir a otra página
      window.location.href = "dashboard.html"; 
    } else {
      alert("❌ Usuario o contraseña incorrectos, inténtalo de nuevo.");
    }
  });
});
