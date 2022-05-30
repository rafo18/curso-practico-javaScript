const precioOriginal = 120;
const descuento = 18;


function calcularPrecioConDescuento(precio , descuento){
    const inputCupon = document.getElementById("cupons");
    const cupon = inputCupon.value;

    const porcentajeDelPrecioConDescuento = 100 - descuento - cupon;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento /100);
    return precioConDescuento;
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeDelPrecioConDescuento,
//     precioConDescuento,
// });

function priceDiscount(){

    

    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue , discountValue);

    const reultP = document.getElementById("result");
    reultP.innerText = "El precio que pagaras es: " + precioConDescuento;


}