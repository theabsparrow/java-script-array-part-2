const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// *******with revers method**********
// let rev = colors.reverse();
// console.log(rev);

// ************with for of loop***********
const revers = [];
// for(let color of colors){
// console.log(color);
//  revers.unshift(color);
// }
// console.log(revers);

// ************with for loop***********
// -----------unshift method----------
// for(let i = 0; i < colors.length; i++){
//     const color = colors[i];
//     console.log(color);
//     revers.unshift(color)
// }
// console.log(revers);
// ----------push method----------
// for(let i = colors.length - 1; i >= 0; i--){
//     const color = colors[i];
//     console.log(color);
//     revers.push(color);
// }
// console.log(revers);

// **********with while loop**********
// ---------unshift method----------
// let i = 0;
// while(i < colors.length){
//     const color = colors[i];
//     console.log(color);
//     revers.unshift(color)
//     i++
// }
// console.log(revers);
// ----------push method----------
let i = colors.length - 1;
while(i >= 0){
    const color = colors[i];
    console.log(color);
    revers.push(color)
    i--
}
console.log(revers);