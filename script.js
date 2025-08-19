/* Fondo con gradiente */
body {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff7eb3, #ff758c, #ff9770);
  font-family: 'Poppins', sans-serif;
}

/* Caja glassmorphism */
.login-box {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  width: 320px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease;
}

/* Animación suave */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

h2 {
  margin-bottom: 20px;
}

/* Input con íconos */
.input-box {
  position: relative;
  margin: 15px 0;
}

.input-box i {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
}

.input-box input {
  width: 100%;
  padding: 10px 10px 10px 35px;
  border: none;
  border-radius: 25px;
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 14px;
}

.input-box input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

/* Botón */
button {
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(90deg, #ff758c, #ff7eb3);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 120, 150, 0.5);
}

/* Texto de registro */
.register-text {
  margin-top: 20px;
  font-size: 14px;
}

.register-text a {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}

.register-text a:hover {
  text-decoration: underline;
}
