document.addEventListener('DOMContentLoaded', () => {
  cargarPerros();
});

let cargarPerros = () => {

    let plantilla, contenedor;

    fetch("https://random.dog/woof.json")
      .then(response => response.text())
      .then(data => { 
        jsonData = JSON.parse(data);
        contenedor = document.querySelector('div.respuesta')
          plantilla = `
          <div class="card">
            <div class="card__image-holder">
              <img class="card__image" src="${jsonData.url}" alt="dog" />
            </div>
            <div class="card-title">
              <h2>
              Tamaño: 
              <small>${jsonData.fileSizeBytes}</small>
              </h2>
            </div>
          </div>
      `
        contenedor.innerHTML += plantilla
        
      console.log(jsonData);
      }); 
}
