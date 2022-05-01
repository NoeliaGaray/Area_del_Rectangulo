rotulo1.innerHTML = "Ingrese la base:";
rotulo2.innerHTML = "Ingrese la altura: ";

let btnEnv = document.getElementById("btnEnviar");
let base: number = Number(dato1.value);
let altura: number = Number(dato2.value);

btnEnv.addEventListener("click", () => {
  let base: number = Number(dato1.value);
  let altura: number = Number(dato2.value);
  let area: number = base * altura;
  console.log("el area es", area);
});
let area: number = base * altura;
