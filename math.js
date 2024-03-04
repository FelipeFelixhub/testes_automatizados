function soma(a,b){
    return a + b;
}

function subtracao(a,b){
    return a -b
}
function divisao(a,b){
    return a / b
}
function multiplicacao(a,b){
    return a * b
}

module.exports ={
    soma,
    subtracao,
    divisao,
    multiplicacao
}

soma(2,3)
console.log(subtracao(10,5))
console.log(divisao(10,5))
console.log(multiplicacao(10,5))

