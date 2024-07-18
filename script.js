document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('startButton').addEventListener('click', function() {
        console.log("Botón presionado"); // Mensaje de depuración
        let min = 1;
        let max = 100;
        let guess;
        let userConfirmed = false;

        while (min <= max && !userConfirmed) {
            guess = Math.floor((min + max) / 2);
            userConfirmed = confirm(`¿Es tu número el ${guess}?`);

            if (!userConfirmed) {
                let higher = confirm(`¿Es tu número mayor que ${guess}?`);

                if (higher) {
                    min = guess + 1;
                } else {
                    max = guess - 1;
                }
            }
        }

        if (userConfirmed) {
            document.getElementById('result').innerHTML = `<div class="alert alert-success">🔮 Siempre supe que tu número era el 👁️ ${guess} 👁️. Eres más transparente que baba de nopal. Juguemos otra vez 🔮</div>`;
        } else {
            document.getElementById('result').innerHTML = `<div class="alert alert-danger">Oso, oso, mentiroso, obviamente me hiciste trampa 👺</div>`;
        }
    });
});

