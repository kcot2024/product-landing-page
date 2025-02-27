document.addEventListener("DOMContentLoaded", function () {
    const btnPositivos = document.getElementById("btn-positivos");
    const btnNegativos = document.getElementById("btn-negativos");
    const btnTodos = document.getElementById("btn-todos");
    const testimonios = document.querySelectorAll("#testimonios article");

    btnPositivos.addEventListener("click", function () {
        testimonios.forEach(el => {
            el.classList.toggle("hidden", !el.classList.contains("positivo"));
        });
    });

    btnNegativos.addEventListener("click", function () {
        testimonios.forEach(el => {
            el.classList.toggle("hidden", !el.classList.contains("negativo"));
        });
    });

    btnTodos.addEventListener("click", function () {
        testimonios.forEach(el => el.classList.remove("hidden"));
    });
});
