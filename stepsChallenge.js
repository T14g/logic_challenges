// Imagine que você tem que subir uma escada de n degraus
// Podendo subir : 1, 2 ou 3 degraus de uma vez
// Crie um algoritmo que mostre de quantas maneiras diferentes é possível subir essa escada
// 0 => 1 possibilidade pois você já está nela :)

function steps(n){

    //First base cases
    if(n === 0 || n === 1 ){
        return 1;
    }else if( n === 2){
        return 2;
    }else if( n === 3){
        return 4;
    }

    //The Magic Array of Dynamic Programming 
    let dp = [];

    //The initial base values
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    
    //Que tal dp[4] ser = dp[3] + dp[2] + d[1]
    //Em outras palavras para uma escada de 4 degraus teremos as possibilidades:
    //possibilidades(3) + possibilidades(2) + possibilidades(1)
    for(let i = 4 ; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }
    
    return dp[n];

}

console.log(steps(5));