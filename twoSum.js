//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

const numbers =[2,7,11,15, 3, 3];
const target = 9;

function adding(numbers, target){

    
    
    for (let i=0; i<numbers.length; i++){
        for(let j=0; j<numbers.length; j++){
            // console.log(numbers[i], numbers[j]);
            let sum = numbers[i] + numbers[j];
            let multiply = numbers[i] * numbers[j];
            // console.log(numbers[i], numbers[j], "and the sum =", sum);
            if(sum === target || multiply === target){
                // console.log(i, j, sum, 'Found');
                const match = [i, j, "add"];
                return match;
            }
            // else if(multiply === target){
            //     const match = [i, j, "mul"];
            //     return match;
            
        }
    }   
}

const result = adding(numbers, target);
console.log(result);