// Just a O(lon(n)) complexity exemple
// Big O cares about the worst case only
// This code will look for a number inside an array then return the index
// Find the middle of a big array, discard one half, thats it
// Obs: sorted array

const {performance} = require('perf_hooks');


function findIndex(arr, value){
    let high = arr.length -1;
    let low  = 0;


    while( low <= high) {

        //O centro
        let mid = Math.round((low + high)/2);
        
        //Valor encontrado no centro
        if (arr[mid] === value){
            return mid;
        }else if(value > arr[mid]){
            //Valor maior que o valor do centro, mover-se para aidreita
            low = mid +1;
        }else if(value < arr[mid]){
            //Valor menor que o do centro, mover-se para a esquerda
            high = mid - 1;
        }

    }

    return -1;

}


const testArray = [1,2,3,4,5,6,70,22,33, 13,7];
 //Ordem crescente
let sorted = testArray.sort(function(a, b) {
    return a - b;
});

function timeTesting(fn,arr,value){
    let start = performance.now();

    fn(arr,value);

    let end = performance.now();

    console.log(`Execution time: ${end - start} ms`);
}


timeTesting(findIndex ,sorted, 7);