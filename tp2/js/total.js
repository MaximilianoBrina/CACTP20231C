const precioTicket = 200;
const descuentos = {
  "sin categoria": 0,
  "estudiante": 0.8,
  "trainee": 0.5,
  "junior": 0.15
};

function calcularTotal() {
  const cantidad = parseInt(document.querySelector("#cantidad").value, 10);
  const categoria = document.querySelector("#categoria").value;
  const descuentoCategoria = descuentos[categoria];
  const total = cantidad * precioTicket * (1 - descuentoCategoria);
  document.querySelector("#total").value = total;
}
