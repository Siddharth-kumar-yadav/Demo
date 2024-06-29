// function myfunction(){
//     console.log("A Slogun written by me:")
//     console.log("All Power is Within You\nYou can Do Anything\nAnd Everything.");
// }
// myfunction();

//function parameter or inputs.
// function myfun(msg){
//     console.log(msg);
// }
// myfun("This is a message from the function");//argument.

//using function perform sum operation.
// function sun(a,b) {
//     console.log(a+b);
// }
// sun(5,100);

//function return.
// function sum(x , y ) {
//     s= x +y;
//     console.log("The Value of X =",+x ,"and Y = "+y);
//     return s;

// }
// const arrysum=(x,y)=>{
//     console.log(x+y);
// };
// console.log(arrysum(2,3));

// let add=sum(23,45);
// console.log(add);

// function mul(a,b){
//     return a*b;
// }
// const arrymul=(a,b)=>{
//     console.log(a*b);
// }
// console.log(arrymul(8,9));

//practice ques.
// function countvowels(str){
//     let count =0;
//     for(const char of str){
//         if(char==="a" || char ==="e" || char==="i" ||char==="o" || char==="u"){
//             count++;
//         }
//     }
//     return count;
// }
// const arryvowels=(str)=>{
//     let count =0;
//     for(const char of str){
//         if(char==="a" || char ==="e" || char==="i" ||char==="o" || char==="u"){
//             count++;
//         }
//     }
//     return count;
// }

//call back function.
// function myfun(){
//     console.log("Hello");
// }
// function abc(myfun){
//     return myfun;
// }
// console.log(myfun());

//for each function.
// let arr=[1,2,3,4,5,6,7,8];

// arr.forEach(function printVal(val){
//     console.log(val);
// });

//array function in for each function

// let arr=[1,2,3,4,5,6,7,8,9];

//  arr.forEach((val)=>{
//    console.log(val);
//  });

// let arr=["Muzaffarpur","patna","gaya"];

//  arr.forEach((val,idx)=>{
//    console.log(idx,val.toUpperCase());
//  });

//practice ques.
// let arr=[1,2,3,4,5,6,7,8,9];

//  arr.forEach((num)=>{
//    console.log(num*num);
//  });
//we can write a seperate arry function and we can run that also in the for each function.
// let arr=[18,26,38,48,58,69,75,88,99];
// let calsquare=(num)=>{
//     console.log(num*num);
// }
// arr.forEach(calsquare);

//map method.
// let nums=[88,99,89,79,97];

// let newarr=nums.map((val)=>{
//     return val*val;
// });

// //filter function.
// let newnum=nums.filter((val)=>{
//     return val%2===0;
// });
// console.log(newarr);
// console.log(newnum);

//REduse function.
// to print the sum of all arry numbers.
// let arr=[1,2,3,9,4,5,6,7];
// const output = arr.reduce((prev,curr)=>{
//     return res+curr;
// });
// console.log(output);

//To print the largest number.
// let arr=[1,2,3,9,4,5,6,7];
// const output = arr.reduce((prev,curr)=>{
//     return prev > curr? prev : curr;
// });
// console.log(output);

//practice ques.
// let marks=[89,93,99,89,68];
// let toppers= marks.filter((val)=>{
//     return val>90;
// });
// console.log(toppers);

//practice ques 2.
//user number taken by prompt for arry.
let n = prompt("Enter a number:");

let arr =[];
for (let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum = arr.reduce((res,curr)=>{
    return res+curr;
});
console.log("sum is",sum);

let factorial = arr.reduce((res,curr)=>{
    return res*curr;
});
console.log("factorial is=",factorial);