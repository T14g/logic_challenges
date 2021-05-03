// Encontre todas as combinações possíveis 
// ao remover 0 a n caracteres de uma string 

//Primeiro, primeiro e segundo, 

function allCombinations(input, results, subset, startIndex) {

    if(subset.length > 0){
        console.log(subset);
        results.push(subset);
    }

    for (let i = startIndex; i < input.length; i++) {
        let newSubset = [...subset, input[i]];
        allCombinations(input, results, newSubset, i + 1);
        subset.pop();
    }

    return results;
}



const str = 'BAC';
const splittedString = str.split('');
splittedString.sort();
let substrings = allCombinations(splittedString, [], [], 0);
console.log(substrings);