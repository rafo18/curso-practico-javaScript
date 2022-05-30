
let mediana;

const cantidad = prompt("cantidad de elementos del array")
const array = [];

for ( let i = 0 ; i < cantidad ; i++){
    const valor = prompt(`ingrese el valor: ${i+1} del array`);
    array.push(valor);
}

    

function comparacion(a ,b){
     return a-b;
};

function esPar(numero){
    if (numero % 2 == 0){
        return true;       
    }else {
        return false;
    }
};



function calcularMediana(lista){

    const listaOrdenada = lista.sort(comparacion);
    console.log(listaOrdenada);

    const mitadLista1 = parseInt(lista.length / 2);

    if(esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista1];
        const elemento2 = listaOrdenada[mitadLista1 - 1];
    
        mediana = (elemento1 + elemento2) / 2;

        return mediana

    
    
    }else{
        mediana = listaOrdenada[mitadLista1];

        return mediana;
    
    }


};









