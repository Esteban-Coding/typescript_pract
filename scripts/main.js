// Definir variables en typeScript
let nombre = "Inés María Oliveros";
console.log("Variable texto: ", nombre);
let numero = 2024;
console.log("Variable numérica: ", numero);
let verdadero = true;
verdadero = false;
console.log("Variable booleana: ", verdadero);
let cualquier = "puedo asignarle lo que quiera";
console.log("Variable any: ", cualquier);
// Constantes
const nombres = "María";
// Arrays
let personas = ["Ángela", "Luis", "Diana", "Carlos"];
console.log(personas);
let div_personas = document.querySelector("#person");
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
