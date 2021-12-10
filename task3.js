// Write a function that takes an array of numbers as its argument and returns the two highest numbers within the array.
// The returned value should be an array in the format [second oldest age, oldest age].
// The order of the numbers passed in could be any order.
// The array will always include at least 2 items.
// If there are two or more oldest age, then return both of them in array format.

const ages = [4, 2, 5, 1, 3];

const sortAges = agesArray => {
    if (agesArray.length <= 1) {
        return "Sorry, length of array must be greater than 1";
    }
    let sortedAges = agesArray.sort((a, b) => a - b);
    let finalArr = sortedAges.slice(-2)
    return finalArr;
}

console.log(sortAges(ages));