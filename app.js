const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    // Generando un número aleatorio entre 0 y el tamaño de colors
    const randomNumber = getRandomNumber();
    // Obteniendo el color de la lista de colores
    const colorPicked = colors[randomNumber];
    // Cambiando el color de fondo del body
    document.body.style.backgroundColor = colorPicked;
    // Cambiando el texto del span
    color.textContent = colorPicked;
  });

  btn.addEventListener("click", () => {
    // ...
  });
  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }