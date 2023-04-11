document.addEventListener("DOMContentLoaded", function() {
    // Variables globales
    let numeroMagico;
    let oportunidades = 1;
    let vidas = 3;

    document.getElementById("comenzarJuego").addEventListener("click", function() {
        // Generar numero aleatorio
        numeroMagico = Math.floor(Math.random() * 100) + 1;
        // Mostrar input para adivinar el numero
        document.getElementById("adivinar").style.display = "";
    });

    document.querySelector("#enviar").addEventListener("click", function() {
        // Obtener numero ingresado por el usuario
        let numeroIngresado = document.getElementById("numero").value;
        if (numeroIngresado == numeroMagico) {
            // El usuario adivino el numero
            window.alert("¡Felicitaciones! Adivinaste el número");
            document.getElementById("adivinar").style.display = "none"; // Ocultar input para adivinar
            document.getElementById("primerInterfaz").style.display = "none"; // Ocultar input para adivinar
            document.getElementById("ganaste").style.display = "block"; // Mostrar mensaje de felicitaciones y boton
        } else {
            // Disminuir oportunidades, quitar emmoji de corazon y mostrar mensaje de error
            oportunidades--;
            if (oportunidades == 0) {
                vidas--;
                oportunidades = 1;
                document.querySelector("#corazones .corazon:last-child").remove();
            } else {
                window.alert("Número incorrecto. Te quedan " + oportunidades + " oportunidades");
            }
        }
        if (numeroIngresado > numeroMagico) {
            // El numero ingresado es mayor al numero magico
            alert("El número que ingresaste es MAYOR");
        } else {
            // El numero ingresado es menor al numero magico
            alert("El número que ingresaste es MENOR");
        }
        if (vidas == 0) {
            document.getElementById("adivinar").style.display = "none"; // Ocultar input para adivinar
            document.getElementById("primerInterfaz").style.display = "none"; // Ocultar input para adivinar
            document.getElementById("gameOver").style.display = "block"; // Mostrar mensaje de game over y boton
            // En el JavaScript
            document.getElementById("resultado").textContent = "El numero magico era: " + numeroMagico;
        }
    });

    document.getElementById("reiniciarJuego").addEventListener("click", function() {
        location.reload(); // Recargar la pagina para reiniciar el juego
    });
});
