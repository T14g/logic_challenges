// Solved with Dynamic Programming by T14g
function longestSubsequenceLen(arr) {
    
    const size = arr.length;
    let   longestLength = [];
    let   response = 1;

    // Inicializa o array  com 1s 
    for(let i = 0 ;i < size; i++){
        longestLength[i] = 1;
    }

    //Compara cada um dos valores com o último
    for(let i = 0; i < size; i++){
        for(let j = 0; j < i ; j++){
            //Sendo o valor atual menor que o último
            if(arr[j] < arr[i]) {
                //Compara quem é o maior o valor salvo no length do último ou o atual + 1
                longestLength[i] = Math.max(longestLength[i], longestLength[j] +1 );
            }

        }
    }

    //Encontra o maior
    for(let i = 0; i < size; i++){
        response = Math.max(response,[longestLength[i]])
    }

    return response; 
}

let TEST = [5, 2, 7, 4, 3, 8];
let TEST2 = [6, 2, 4, 3, 7, 4, 5];

console.log(longestSubsequenceLen(TEST));
