document.addEventListener("DOMContentLoaded", function () {
    const btnPositivos = document.getElementById("btn-positivos");
    const btnNegativos = document.getElementById("btn-negativos");
    const btnTodos = document.getElementById("btn-todos");
    const testimoniosPositivos = document.querySelectorAll(".positivo");
    const testimoniosNegativos = document.querySelectorAll(".negativo");

    btnPositivos.addEventListener("click", function () {
        testimoniosPositivos.forEach(el => el.style.display = "block");
        testimoniosNegativos.forEach(el => el.style.display = "none");
    });

    btnNegativos.addEventListener("click", function () {
        testimoniosPositivos.forEach(el => el.style.display = "none");
        testimoniosNegativos.forEach(el => el.style.display = "block");
    });

    btnTodos.addEventListener("click", function () {
        testimoniosPositivos.forEach(el => el.style.display = "block");
        testimoniosNegativos.forEach(el => el.style.display = "block");
    });
});
