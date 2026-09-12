    function verificar() {
        const nacionalidad = document.getElementById("nacionalidad").value.toLowerCase();
        const salida = document.getElementById("resultado");
        const imagen = document.getElementById("imagen");
        const audio = document.getElementById("miAudio");

        if (nacionalidad === "venezolana") {
        salida.textContent = "Tú no puedes pasar a la frontera";
          imagen.src = "imagenes/nicolas-maduro.jpg"; // Ruta de la imagen
          imagen.style.display = "block"; // Mostrar la imagen

        } else if (nacionalidad === "chilena") {
        salida.textContent = "Tú no eres bienvenido";
          imagen.src = "imagenes/Kast.jpg"; // Ruta de la imagen
          imagen.style.display = "block"; // Mostrar la imagen

        } else if (nacionalidad === "mambo") {
        salida.textContent = "Tú ere un Mambo";
          imagen.src = "imagenes/Mambo.jpg"; // Ruta de la imagen
          imagen.style.display = "block"; // Mostrar la imagen
        
        audio.src = "Mambo_audio.mp3";
        audio.play();

        } else if (nacionalidad === "francesa") {
        salida.textContent = "Tú eres bienvenido";
          imagen.src = "imagenes/Condor.jpg"; // Ruta de la imagen
          imagen.style.display = "block"; // Mostrar la imagen

        } else if (nacionalidad === "china") {
        salida.textContent = "Tú eres bienvenido";
          imagen.src = "imagenes/xi jinping.jpg"; // Ruta de la imagen
          imagen.style.display = "block"; // Mostrar la imagen
        } else if (nacionalidad === "estadounidense") {
        salida.textContent = "Tú no puedes pasar a la frontera";
          imagen.src = "imagenes/trump.jpg"; // Ruta de la imagen
          imagen.style.display = "block"; // Mostrar la imagen
        } else {
        salida.textContent = "Tú eres bienvenido";
          imagen.src = "imagenes/Cafe.jpg"; // Imagen por defecto
          imagen.style.display = "block"; // Mostrar la imagen
        }
    }