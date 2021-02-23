// Complete the primality function below.
function primality(n) {
    
    let sqrtN = Math.floor(Math.sqrt(n)) + 1;
    
    if (n === 1){
        return 'Not prime'
    }else{
        for(let i = 2; i < sqrtN; i++){
            if (n % i === 0){
                return 'Not prime';
            }
        }

        return 'Prime';
    }
}