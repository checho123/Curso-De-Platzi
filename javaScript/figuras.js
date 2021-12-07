// Cuadrados Variables
const ladoCuadrado = 5;
const cm = "cm";

console.group("Cuadrados");
console.log("Los lados de los cuadrados: " + ladoCuadrado + cm);

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro de mi cuadrado: " + perimetroCuadrado + cm);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + cm + "^2");

console.groupEnd("Cuadrados");

// codigo del triangulo

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.group("Triangulos");

console.log(
  "los lados del triangulo miden: " +
    ladoTriangulo1 +
    cm +
    ", " +
    ladoTriangulo2 +
    cm +
    ", base del triangulo: " +
    baseTriangulo
);

const alturaTriangulo = 5.5;
console.log("La altura de los triangulos son: " + alturaTriangulo + cm);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro triangulo: " + perimetroTriangulo + cm);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + cm + "^2");

console.groupEnd("Triangulos");

// Codigo del circulo
console.group("Circulo");

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + cm);

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("EL diametro del circulo es: " + radioCirculo + cm);

//PI
const PI = Math.PI;
console.log("PI es " + PI);

//Circuferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + cm);

//Area
const areaCirculo = radioCirculo * radioCirculo * PI;
console.log("El area del circulo es " + areaCirculo + cm + "^2");

console.groupEnd("Circulo");
