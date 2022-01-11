'use strict';

let Arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

const DiagonalDifference = (matrixArr) => {

    let diagonalDiff;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;


    for(let i = 0; i < matrixArr.length; i++){
        primaryDiagonalSum += matrixArr[i][i];
        secondaryDiagonalSum += matrixArr[i][matrixArr.length - 1-i];
   
    }
    
    diagonalDiff= Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
    return diagonalDiff;
}

console.log("The diagonal difference is " + DiagonalDifference(Arr));