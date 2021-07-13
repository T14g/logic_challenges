function arrayManipulation(n, queries, arr = []) {

    if(arr.length === 0){
       for(let i = 0; i < n; i++){
        arr[i] = 0;
        } 
    }
    
    if(queries.length > 0){
        let start = queries[0][0] - 1;
        let end = queries[0][1] - 1;
        let summ = queries[0][2];
        let localMax = 0;
        
        for(let i = start; i <= end; i++){
           arr[i] += summ;
           localMax = Math.max(localMax,)
        }
        
        queries.shift();
        arrayManipulation(n, queries, arr );
        
    }
    
    let max = 0;
    console.log(arr);
    arr.map(num => {
        if(num > max){
            max = num;
        }
    })
    
    return max;

}