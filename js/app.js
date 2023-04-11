//DOMContentLoaded como buena practica al utlizar DOM.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("comenzarJuego").addEventListener("click", function() {
        // Generar numero aleatorio
        let numeroMagico = Math.floor(Math.random() * 100) + 1;
        let oportunidades = 5;
        let vidas = 3;
        // Mostrar input para adivinar el numero
        document.getElementById("adivinar").style.display = "";

        document.querySelector("#enviar").addEventListener("click", function() {
            // Obtener numero ingresado por el usuario
            let numeroIngresado = document.getElementById("numero").value;
            if (numeroIngresado == numeroMagico) {
                // El usuario adivino el numero
                window.alert("¡Felicitaciones! Adivinaste el número");
            } else {
                // Disminuir oportunidades, quitar emmoji de corazon y mostrar mensaje de error
                oportunidades--;
                if (oportunidades == 0) {
                    vidas--;
                    oportunidades = 5;
                    document.querySelector("#corazones .corazon:last-child").remove();
                } else {
                    window.alert("Número incorrecto. Te quedan " + oportunidades + " oportunidades");
                }
            }
            if (numeroIngresado > numeroMagico) {
                // El numero ingresado es mayor al numero magico
                alert("El número que ingresaste es mayor al número mágico");
            } else {
                // El numero ingresado es menor al numero magico
                alert("El número que ingresaste es menor al número mágico");
            }
            if (vidas == 0) {
                document.getElementById("adivinar").style.display = "none"; // Ocultar input para adivinar
                document.getElementById("primerInterfaz").style.display = "none"; // Ocultar input para adivinar
                document.getElementById("gameOver").style.display = "block"; // Mostrar mensaje de game over y boton
                document.getElementById("reiniciarJuego").addEventListener("click", function() {
                    location.reload(); // Recargar la pagina para reiniciar el juego
                });
            }
        });
    });
});

