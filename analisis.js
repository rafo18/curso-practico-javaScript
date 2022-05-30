function esPar(numero){
    return (numero % 2 == 0);
};

// salarios colombia
const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

// salarios ordenados

const salariosColSorted = salariosCol.sort(function (a,b){
    return a-b
});

// medianas salarios

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const elemento1 = lista[mitad];
        const elemento2 = lista[mitad - 1];
    
        mediana = (elemento1 + elemento2) / 2;

        return mediana;
    
    }else{
        mediana = lista[mitad];

        return mediana;
    
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%



const spliceStart = parseInt((salariosColSorted.length * 90) / 100) ; 
const spliceCount = salariosColSorted.length - spliceStart;

const salariosCol10 = salariosColSorted.splice(spliceStart , spliceCount);

const medianaTop10 = medianaSalarios(salariosCol10);

console.log({
    medianaGeneralCol,
    medianaTop10

});
