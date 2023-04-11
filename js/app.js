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
                document.getElementById("ganaste").style.display = "block";
                document.getElementById("adivinar").style.display = "none"; // Ocultar input para adivinar
                document.getElementById("primerInterfaz").style.display = "none"; // Ocultar primera interfaz
            } else {
                // Disminuir oportunidades, quitar emmoji de corazon y mostrar mensaje de error
                oportunidades--;
                if (oportunidades == 0) {
                    vidas--;
                    oportunidades = 5;
                    document.querySelector("#corazones .corazon:last-child").remove();
                } else {
                    alert("Número incorrecto. Te quedan " + oportunidades + " oportunidades");
                }
            }
            if (numeroIngresado > numeroMagico) {
                // El numero ingresado es mayor al numero magico
                alert("El numero que ingreso, es MAYOR al numero magico");
            } else if (numeroIngresado < numeroMagico) {
                // El numero ingresado es menor al numero magico
                alert("El numero que ingreso, es MENOR al numero magico");
            }
            if (vidas == 0) {
                document.getElementById("adivinar").style.display = "none"; // Ocultar input para adivinar
                document.getElementById("primerInterfaz").style.display = "none"; // Ocultar input para adivinar
                document.getElementById("gameOver").style.display = "block"; // Mostrar mensaje de game over y boton
                document.getElementById("reiniciarJuego").addEventListener("click", function() {
                    location.reload(); // Recargar la pagina para reiniciar el juego
                });
            }
            document.getElementById("reiniciarJuegoGanador").addEventListener("click", function(){
                location.reload();
            })
        });
    });
});
