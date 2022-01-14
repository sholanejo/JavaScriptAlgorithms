"use strict";

let arr = [-2, 9, 8, 2, 7, 3, 6, 5, -1, -50];

const minimumNum = arr =>{
    let smallest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
} 
console.log(minimumNum(arr)) 