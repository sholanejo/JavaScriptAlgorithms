//TASK 1

// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.


const summation = (num) =>
{
    let total = 0;
    
    if (num <= 0) 
    {
        console.log('Please input a number greater than 0');
    } 
    else
    {
        for (let i = 0; i <= num; i++)
        {
            total = total + i;
        }
        console.log(total);
    }

}
summation(8);