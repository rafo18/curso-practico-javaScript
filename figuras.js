//Codigo del cuadrado

console.group("cuadrado");
// `const ladoCuadrado = 5;

// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");


function perimetroCuadrado(lado){

    return  lado * 4;

}

perimetroCuadrado()

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");




function areaCuadrado(lado){

    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

//Codigo del triangulo

console.group("triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2= 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("los lados del triangulo miden: " + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm "+ baseTriangulo + "cm ");

// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1 , lado2 , base){

    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
};

// console.log("El perimetro del triangulo es: " + perimetroCuadrado + "cm")

function areaTriangulo (baseTriangulo , alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2;
}

// console.log("El area del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();

//Codigo del circulo

console.group("circulo");

//radio

// const radioCiruculo = 4;

// console.log("El radio del circulo es: " + radioCiruculo + "cm")

//diametro

function diametroCirculo(radio){
    return radio * 2;
}

// console.log("El diametro del circulo es: " + diametroCirculo + "cm")

//pi

const pi = Math.PI;

//circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * pi;
};

// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm")


//area

function areaCirculo (radioCiruculo) {
    return (radioCiruculo * radioCiruculo) * pi;
};

console.groupEnd();

// aqui interactuamos con html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado").value;
   

    const area = areaCuadrado(input);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputLado1");
    const input2 = document.getElementById("inputLado2");
    const input3 = document.getElementById("inputBase");

    const lado1 = input1.value;
    const lado2 = input2.value;
    const base = input3.value;

    const perimetro = perimetroTriangulo(lado1 , lado2 , base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("inputBase");
    const input4 = document.getElementById("inputAltura")

    const base = input3.value;
    const altura = input4.value;


    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input1 = document.getElementById("inputRadio");

    const radio = input1.value;
  

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input1 = document.getElementById("inputRadio");

    const radio = input1.value;


    const area = areaCirculo(radio);
    alert(area);
}







