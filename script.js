document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const carnet = document.getElementById('carnet').value;
    const password = document.getElementById('password').value || "12345";

    // Mostramos un mensaje de "Cargando..." en el botón
    const btn = document.querySelector('.btn-ingresar');
    btn.innerText = "Buscando datos...";
    btn.disabled = true;

    try {
        // Esta es la llamada al "servidor" de Python que haremos con Flask
        const response = await fetch('http://localhost:5000/login', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ carnet, password })
        });

        const datos = await response.json();

        if (datos.success) {
            // Si el scraping fue exitoso, se guarda los datos y redirigimos
            localStorage.setItem('datosAlumno', JSON.stringify(datos.info));
            window.location.href = "dashboard.html"; 
        } else {
            alert("Error: " + datos.message);
        }
    } catch (error) {
        console.error("Error de conexión:", error);
        alert("No se pudo conectar con el servidor de Python. ¿Está encendido?");
    } finally {
        btn.innerText = "Ingresar";
        btn.disabled = false;
    }
});


