function joquempo(p1, p2){
    let a = 'scisor'
    let b = 'paper'
    let c = 'rock'
    if(p1 == p2){
        return console.log(`Empate`)
    } else if((p1 === a && p2 === b) || (p1 === b && p2 === c) || (p1 === c && p2 === a)){
        return console.log(`Player 1 won`)
    } else if((p2 === a && p1 === b) || (p2 === b && p1 === c) || (p2 === c && p1 === a)){
        return console.log(`Player 2 won`)
    } else if ((p1 != a || p1 != b || p1 != c) || (p1 != a || p1 != b || p1 != c)){
        return console.log(`valores inválidos`)
    }
}

console.log(`Situações em que o player 1 ganha:`)
joquempo('scisor', 'paper')
joquempo('paper', 'rock')
joquempo('rock', 'scisor')
console.log(`Situações em que o player 2 banha:`)
joquempo('scisor', 'rock')
joquempo('paper', 'scisor')
joquempo('rock', 'paper')
console.log(`Situação de empate:`)
joquempo('scisor', 'scisor')
joquempo('paper', 'paper')
joquempo('rock', 'rock')
console.log(`Se digitar algum valor errado:`)
joquempo('severino', 'requeijão')