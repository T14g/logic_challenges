// Encontre o menor número de operações que deixe todos os números iguais
// Podendo adicionar 1 , 2 ou 5 de todos menos um 
// Ou se preferir pode apenas subtrair de um deles 1, 2 ou 5
// Not done yet...

function solution(arr) {

    const sortedArr = arr.sort();
    let sum = Number.MAX_SAFE_INTEGER;

    for(let base = 0; base < 3; base++){
        let currentSumm = 0;

        for(let i = 0; i < sortedArr.length; i++){
            let delta = sortedArr[i] - sortedArr[0] + base;
            currentSumm += parseInt(delta/5) + parseInt((delta%5)/2) + parseInt(((delta%5)%2)/1);
        }

        sum = Math.min(currentSumm, sum);
    }

    return sum;

}

let test = [1,1,5];
let result = solution(test);
console.log(result);