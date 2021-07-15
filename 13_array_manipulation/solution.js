function arrayManipulation(n, queries) {

    let outputArray = [];
    let max = 0;
    let summ = 0;

    //Init array with 0's
    for (let i = 0; i < n + 2; i++) {
        outputArray[i] = 0;
    }

    //Prepare the array for the Prefix Summ
    for (let i = 0; i < queries.length; i++) {
        let a = queries[i][0];
        let b = queries[i][1];
        let k = queries[i][2];

        outputArray[a] += k;
        outputArray[b + 1] -= k;
    }

    //Do Prefix Summ P = previous + current number
    for (let j = 0; j < outputArray.length; j++) {

        summ = summ + outputArray[j];

        if (summ > max) {
            max = summ;
        }
    }

    return max;
}

let queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
let n = 5;

arrayManipulation(n, queries);