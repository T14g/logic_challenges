function hourglassSum(arr) {
    let max = -99999;
    
    for(let i = 0 ; i <= 3; i++){
        for(let j = 0 ; j <=3; j++){
            
            let local = 0;
            local += arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            local += arr[i + 1][j + 1];
            local += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            max = Math.max(max,local);
            
        }
    }
    
    return max;
}
