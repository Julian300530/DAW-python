var nombre = 'Francisco Vázquez'; 
console.log('El contenido de nombre es: ' + nombre); 
nombre = 45.23; 
console.log('Nombre = ' + String(nombre));
arreglo = [1,3,5,7,9]; 
console.log(arreglo); 
console.log(arreglo[2]); 

for (var i=0; i<arreglo.length; i++) {
    console.log('Valor de i = '+ String(i));
    console.log('contenido = ' + String(arreglo[i]));
}

function testVar(){
    var x1 = 50; 
    if (true) {
        var x1 = 30;
        console.log(x1); 
    }
    console.log(x1); 
}

function testLet(){
    let x1 = 50; 
    if (true) {
        let x1 = 30;
        console.log(x1); 
    }
    console.log(x1); 
}
console.log('****************'); 
testVar();
console.log('****************');
testLet();  
console.log('****************');
//Diccionario en JS
let auto = {
    marca: 'VW',
    subMarca: 'Jetta',
    modelo: 2022, 
    color: 'Verde'
}; 
console.log('Marca = ' + auto.marca);
console.log('Moldeo: ' + String(auto['modelo'])); 
auto.subMarca = 'Golf'; 
auto['color'] = 'Azul'; 

const nombre2 = 'Javier'; 
//nombre2 = 'Vázquez. '; 
console.log('Mensjae final ')

A2 = [3,4,2,5,9,1,0,3,4,2,5]; 
A3 = A2.sort(); 
console.log(A3); 