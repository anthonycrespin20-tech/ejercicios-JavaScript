let boton = document.getElementById("saludar");

boton.addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value;

    if (nombre.trim() === "") {
        document.getElementById("resultado").textContent =
            "Por favor, escribe tu nombre.";
    } else {
        document.getElementById("resultado").textContent =
            "Hola, " + nombre.trim() + ", bienvenido a la programación.";
    }
});