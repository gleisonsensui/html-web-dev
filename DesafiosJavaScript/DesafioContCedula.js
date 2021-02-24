let salario = 89;
let cedulas = [100, 50, 20, 10, 5, 2, 1];
let contagem = [];

for(let i = 0; i < cedulas.length; i++){
    contagem.push(parseInt(salario/cedulas[i]));
    salario = salario % cedulas[i];
    console.log(`${contagem[i]} nota(s) de R$ ${cedulas[i].toFixed(2)}`)
}

//console.log(contagem)



/*


var valor = parseInt(gets())
var notas = [0, 0, 0, 0, 0, 0, 0]

console.log(valor)

while(valor > 0){
  if(valor >= 100){
    notas[0]++
    valor -= 100
    continue
  }
  if(valor >= 50){
    notas[1]++
    valor -= 50
    continue
  }
  if(valor >= 20){
    notas[2]++
    valor -= 20
    continue
  }
  if(valor >= 10){
    notas[3]++
    valor -= 10
    continue
  }
  if(valor >= 5){
    notas[4]++
    valor -= 5
    continue
  }
  if(valor >= 2){
    notas[5]++
    valor -= 2
    continue
  }
  if(valor >= 1){
    notas[6]++
    valor -= 1
    continue
  }
}


console.log(notas[0] + " nota(s) de R$ 100,00")
console.log(notas[1] + " nota(s) de R$ 50,00")
console.log(notas[2] + " nota(s) de R$ 20,00")
console.log(notas[3] + " nota(s) de R$ 10,00")
console.log(notas[4] + " nota(s) de R$ 5,00")
console.log(notas[5] + " nota(s) de R$ 2,00")
console.log(notas[6] + " nota(s) de R$ 1,00")

*/



