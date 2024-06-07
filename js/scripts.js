document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos con la clase "proyecto"
    var proyectos = document.querySelectorAll(".proyecto");

    // Añade un evento de clic a cada proyecto
    proyectos.forEach(function(proyecto) {
        proyecto.addEventListener("click", function() {
            // Selecciona el elemento de descripción dentro del proyecto clicado
            var descripcion = proyecto.querySelector(".descripcion");

            // Alterna la visibilidad de la descripción
            if (descripcion.style.display === "none" || descripcion.style.display === "") {
                descripcion.style.display = "block";
            } else {
                descripcion.style.display = "none";
            }
        });
    });
});
