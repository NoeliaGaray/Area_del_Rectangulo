rotulo1.innerHTML = "Ingrese la base:";
rotulo2.innerHTML = "Ingrese la altura: ";

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let base: number = Number(dato1.value);
  let altura: number = Number(dato2.value);
  let area: number = base * altura;
  console.log("el area es", area);
});

