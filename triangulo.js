function trianguloIsosceles (lado1 , lado2 , base){
    if(lado1 == lado2){
        alert("Es triangulo isosceles")
        const altura = Math.sqrt((lado1 * lado1) - ((base*base)/4));
        return alert(altura);
    }else{
        alert("no es triangulo isosceles")
    }

};

trianguloIsosceles(3 , 3 , 2);