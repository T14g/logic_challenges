function rotateLeft(d, arr) {
    
    if(d > 0){
        let first = arr[0];
        let arrSize = arr.length;
        
        for(let i = 0; i < arrSize; i++) {
            arr[i] = arr[i +1];
        }

        d = d -1;
        arr[arrSize -1] = first;

        rotateLeft(d, arr);
    }

    return arr;

}


let testingArray = [1,2,3,4,5];


rotateLeft(2,testingArray);
console.log(rotateLeft(5,testingArray));