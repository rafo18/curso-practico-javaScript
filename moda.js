const lista1 =[1,6,5,8,8,8,4,2,3,1,1,1,2,5,8];

function comparar(a,b){
    return a[1]-b[1];
}

function laModa (array){
    const lista1Count = {};

    array.map(function (elemento){

        if (lista1Count[elemento]){
    
            lista1Count[elemento] += 1;
        } else{
            lista1Count[elemento] = 1
        }
    
    });
    
    const lista1Array = Object.entries(lista1Count).sort(comparar);

    const moda = lista1Array[lista1Array.length - 1];

    return moda;

}
