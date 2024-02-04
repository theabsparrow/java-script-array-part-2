const numbers = [12, 98, 5, 41, 23, 78, 46];
let even = [];
// ******for of loop method*********
// for(let number of numbers){
//     if(number % 2 === 0){
//         const num = number;
//         even.push(num)
//     }
// }
// console.log(even);


// ********for loop method********

// for(i = 0; i < numbers.length; i++){
//     const num = numbers[i];
//     if(numbers[i] % 2 === 0){
//         even.push(num)
//     }
// }
// console.log(even); 


// ***********while loop method*********
let i = 0;
while(i < numbers.length){
    const num = numbers[i]
    if(num % 2 === 0){
        even.push(num)
    }
    i++
}
console.log(even);
        