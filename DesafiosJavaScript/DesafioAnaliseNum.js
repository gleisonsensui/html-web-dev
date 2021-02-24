let numeros = 0;
let arrayBase=[-5, 0, -3, -4, 12];

/*
for(let i= 0;i < 5;i++){
  numeros = gets();
  arrayBase.push(numeros);
}
*/
positivo = arrayBase.filter(function(elemento){
    return elemento > 0
})

negativo = arrayBase.filter(function(elemento){
    return elemento < 0
})

par = arrayBase.filter(function(elemento){
    return elemento % 2 === 0;
})

impar = arrayBase.filter(function(elemento){
    return elemento % 2 !== 0;
})


console.log(par.length + ' valor(es) par(es)');
console.log(impar.length + ' valor(es) impar(es)');
console.log(positivo.length + ' valor(es) positivo(s)');
console.log(negativo.length + ' valor(es) negativos(s)');



/*

var pares = 0;

var impares = 0;

var positivo = 0;

var negativo = 0;

var i = 0;

var valor;

while (i < 5){

 valor = parseInt(gets());

 if((valor%2)==0){

 pares++;

 } else if (valor == 0) {

 pares++;

 } else {

 impares++;

 }

 if (valor > 0) {

 positivo++;

 }

 if (valor <0) {

 negativo++;

 }

 i++;

}

console.log(pares + " valor(es) par(es)");

console.log(impares + " valor(es) impar(es)");

console.log(positivo + " valor(es) positivo(s)");

console.log(negativo + " valor(es) negativo(s)");

*/