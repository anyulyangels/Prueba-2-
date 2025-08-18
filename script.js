function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Aquí puedes agregar la lógica para manejar el login
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    alert('Login exitoso!');
}