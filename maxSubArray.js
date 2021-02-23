const {performance} = require('perf_hooks');
 
// Calcular  o subarray máximo
// Fórmula = [(index pares somados) - (index ímpares somados)]^2
// Caso de teste [3,-1,-1,-1,5,1]
// 
// Kadane’s Algorithm — (Dynamic Programming) 
// Programação dinâmica tem a ver com quebrar um problema em problemas menores
// Resolvendo problemas menores uma única e guardando na memória seus resultados
//
// Quote of the day: 
// Those who cannot remember the past are condemned to repeat it. — Dynamic Programming
// Source: https://paulrohan.medium.com/maximum-sum-of-subarray-a-javascript-implementaion-1cf512a58ea9


//Solução (O(n^2))
function bruteForce(arr){
  let maxGlobal = 0, subarrayMax = [];

  while(arr.length > 0){
    let impares = 0, pares = 0, result = 0;

      for(let i = 0 ;i < arr.length ;i++){

        if(i === 0 || i % 2 === 0){
          pares += arr[i]; 
        }else{
          impares += arr[i]; 
        }

      result = pares - impares;
      result = Math.pow(result,2);
      subarrayMax.push(result);
    }
    //Remove o primeiro item
    arr.shift();
  }

  //Procurar em todas as somas de subarray o maior valor
  subarrayMax.map(value =>{
    if(value > maxGlobal){
      maxGlobal = value;
    }
  })

  return maxGlobal;

}

// Kadane’s Algorithm (O(n)) Linear complexity Solution
function kadaneMethod(arr) {
  let result = 0, max = 0, impares = 0, pares = 0;

  for(let i = 0 ;i < arr.length ;i++){

    if(i === 0 || i % 2 === 0){
      pares += arr[i]; 
    }else{
      impares += arr[i]; 
    }

    result = pares - impares;
    result = Math.pow(result,2);
    max = Math.max(result, max);

  }

  return max;
}

function timeTesting(fn,arr){
  let start = performance.now();

  fn(arr);

  let end = performance.now();

  console.log(`Execution time: ${end - start} ms`);
}

const arrTeste = [3,-1,-1,-1,5,1];
timeTesting(kadaneMethod,arrTeste);

