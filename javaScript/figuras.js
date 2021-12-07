const cm = "cm";

// Cuadrados Variables
// const ladoCuadrado = 5;
// console.group("Cuadrados");
// console.log("Los lados de los cuadrados: " + ladoCuadrado + cm);

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perimetro de mi cuadrado: " + perimetroCuadrado + cm);

function areaCuadrado(lado) {
  return lado * lado;
}

// console.log("El area del cuadrado es: " + areaCuadrado + cm + "^2");

console.groupEnd("Cuadrados");

// codigo del triangulo
/* 
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4; */

console.group("Triangulos");

/* console.log(
  "los lados del triangulo miden: " +
    ladoTriangulo1 +
    cm +
    ", " +
    ladoTriangulo2 +
    cm +
    ", base del triangulo: " +
    baseTriangulo
);
 */
/* const alturaTriangulo = 5.5;
console.log("La altura de los triangulos son: " + alturaTriangulo + cm); */

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
//console.log("El perimetro triangulo: " + perimetroTriangulo + cm);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
//console.log("El area del triangulo es: " + areaTriangulo + cm + "^2");

console.groupEnd("Triangulos");

// Codigo del circulo
console.group("Circulo");

// Radio
/* const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + cm); */

//Diametro
function diametroCirculo(radio) {
  return radio * 2;
};
/* console.log("EL diametro del circulo es: " + radioCirculo + cm); */

//PI
const PI = Math.PI;
console.log("PI es " + PI);

//Circuferencia
function perimetroCirculo (radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
};
/* console.log("El perimetro del circulo es: " + perimetroCirculo + cm); */

//Area
function areaCirculo(radio){
  return radio * 2 * PI;
}
/* console.log("El area del circulo es " + areaCirculo + cm + "^2"); */

console.groupEnd("Circulo");
