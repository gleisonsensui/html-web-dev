let numeros =[7, -5, 6, -3.4, 4.6, 12];
let positivo = 0;

for(let i= 0;i<6;i++){
  
  if(numeros[i] > 0 ){
    positivo ++;
  }
}

console.log(positivo + ' valores positivos');
