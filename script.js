const btn = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

btn.addEventListener("click", () => {
  const alto = parseFloat(document.getElementById("alto").value);
  const ancho = parseFloat(document.getElementById("ancho").value);

  if (!alto || !ancho || alto <= 0 || ancho <= 0) {
    resultado.textContent = "Ingresa valores válidos";
    return;
  }

  const separacion = 0.3; // espacio de corte en cm
  const altoFinal = alto + separacion;
  const anchoFinal = ancho + separacion;

  const vertical = Math.floor(100 / altoFinal);
  const horizontal = Math.floor(100 / anchoFinal);
  const total = vertical * horizontal;

  resultado.innerHTML = `
    ${total} etiquetas por m²
    <small>${vertical} × ${horizontal} (alto × ancho)</small>
  `;

  dibujar(altoFinal, anchoFinal);
});

function dibujar(alto, ancho) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const escala = 4; // solo visual
  const h = alto * escala;
  const w = ancho * escala;

  for (let y = 0; y < canvas.height; y += h) {
    for (let x = 0; x < canvas.width; x += w) {
      ctx.strokeRect(x, y, w, h);
    }
  }
}
