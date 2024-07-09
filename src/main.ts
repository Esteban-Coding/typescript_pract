// Definir variables en typeScript
let nombre:string = "Inés María Oliveros";
console.log("Variable texto: ", nombre);

let numero:number = 2024;
console.log("Variable numérica: ", numero);

let verdadero = true;
verdadero = false;
console.log("Variable booleana: ", verdadero);

let cualquier:any = "puedo asignarle lo que quiera";
console.log("Variable any: ", cualquier);

// Constantes
const nombres:string = "María";

// Arrays
let personas:string[] = ["Ángela", "Luis", "Diana", "Carlos"];
console.log(personas);

let div_personas:HTMLElement | null = document.querySelector("#person");

let htmlContent = "<ul>";
console.log(htmlContent);

personas.map((persona) => {
  htmlContent += `<li>${persona}</li>`; // Alt+96
});

htmlContent += "</ul>";

console.log(htmlContent);

console.log("div_personas", div_personas);

if (div_personas) {
  div_personas.innerHTML = htmlContent;
}
