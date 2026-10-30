let botonmorado = document.getElementById("morado");
let botonnegro = document.getElementById("negro");
let botonamarillo = document.getElementById("amarillo");

botonmorado.addEventListener("click", function () {
    document.body.style.backgroundColor = "purple";
});

botonnegro.addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
});

botonamarillo.addEventListener("click", function () {
    document.body.style.backgroundColor = "yellow";
});