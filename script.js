const form = document.querySelector("form");
const carnetInput = document.getElementById("carnet");
const passwordInput = document.getElementById("password");
const btn = document.querySelector(".btn-ingresar");

/* ACTIVAR / DESACTIVAR BOTÓN */
function validarCampos() {
  if (carnetInput.value.trim() !== "" || passwordInput.value.trim() !== "") {
    btn.disabled = false;
    btn.classList.add("activo");
  } else {
    btn.disabled = true;
    btn.classList.remove("activo");
  }
}

carnetInput.addEventListener("input", validarCampos);
passwordInput.addEventListener("input", validarCampos);

/* ENVÍO DEL LOGIN */
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const carnet = carnetInput.value;
  const password = passwordInput.value || "12345";

  btn.innerText = "Buscando datos...";
  btn.disabled = true;

  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ carnet, password }),
    });

    const datos = await response.json();

    if (datos.success) {
      localStorage.setItem("datosAlumno", JSON.stringify(datos.info));
      window.location.href = "dashboard.html";
    } else {
      alert("Error: " + datos.message);
    }
  } catch (error) {
    alert("No se pudo conectar con el servidor.");
  } finally {
    btn.innerText = "Ingresar";
    validarCampos(); // vuelve al color correcto
  }
});
