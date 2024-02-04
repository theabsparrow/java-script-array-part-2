const statement = 'I am a hard working person';
let isArray = statement.split(" ");
console.log(isArray);


let revers = [];


// *******method part**********


// ----------with for of unshift join-----------
// for(let state of isArray){
//     revers.unshift(state)
// }
// console.log(revers);
// let finalStr = revers.join(" ")
// console.log(finalStr);

// -----------with for unshift join----------
// for(i = 0; i < isArray.length; i++){
//     let state = isArray[i];
//     revers.unshift(state)
// }
// console.log(revers);
// let finalStr = revers.join(" ")
// console.log(finalStr);

// --------with while unshift join---------
// let i = 0;
// while(i < isArray.length){
//     let state = isArray[i];
//     revers.unshift(state)
//     i++
// }
// console.log(revers);
// let finalStr = revers.join(" ")
// console.log(finalStr);


// ***********method part***********

//------- with revrse method-------
// let state = isArray.reverse()
// let str = state.join(" ");
// console.log(str);

// ----------with for push method---------
// for(i = isArray.length - 1; i >= 0; i--){
//     let state = isArray[i];
//     revers.push(state)
// }
// console.log(revers);
// let finalStr = revers.join(" ")
// console.log(finalStr);

// ---------with while push method----------
// let i = isArray.length - 1;
// while(i >= 0){
//     let state = isArray[i];
//     revers.push(state)
//     i--
// }
// console.log(revers);
// let finalStr = revers.join(" ")
// console.log(finalStr);


// ********method part**********
let jointString = "";

// -----------with for method-----------
// for(i = isArray.length - 1; i >= 0 ; i--){
//     const state = isArray[i];
//     console.log(state);
//     jointString = jointString + " " + state;
// }
// console.log(jointString);

// ----------with while method----------
let i = isArray.length - 1;
while(i >= 0){
    const state = isArray[i];
    console.log(state);
    jointString = jointString + " " + state;
    i--
}
console.log(jointString);