const array1 = [3,5,8,77,2,3,1,3,5,8,8];

function comp(a,b){
    return a-b
};


function rango (array) {

    const arrayOrdenada = array.sort(comp);

    const rango = parseInt((arrayOrdenada[0]) + parseInt(arrayOrdenada[arrayOrdenada.length - 1]) / 2);
    
    return rango;
    
}
