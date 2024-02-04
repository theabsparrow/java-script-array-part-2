let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// console.log(numbers);


// *********with join method********
// let str = numbers.join("");
// console.log(str);
// console.log(str.indexOf("k"));
// console.log(str.length);


// ***********for loop*********
let jointString = "";
// for(i = 0; i < numbers.length; i++){
//     const num = numbers[i];
//     console.log(num);
//     jointString += num;
// }
// console.log(jointString);

// *********for of loop**********
// let concatenatedString = '';
// for (let element of numbers) {
//     concatenatedString += element;
// }
// console.log(concatenatedString);

// ********while loop*********
let i = 0;
while(i < numbers.length){
    const num = numbers[i];
    console.log(num)
    jointString += num
    i++
}
console.log(jointString);