//console.log("For loops");
// let i;
// for  (i = 0; i <10; i++){
//     console.log("Kumar");
// }

// let sum=0;
// let n=9;
// for(let i=1;i<=n;i++) {
//     sum=sum+i;
// }
// console.log("Sum is",sum);

// console.log("while loop");

// let i=0;
// while(i<=5) {
//     console.log("i=",i);
//     i++;
// }

// console.log("Do while loop");

// let i =1;
// do{
//     console.log("Value of I=" , i);
//     i++;
// }while(i<=10);


//for of loop.
// console.log("for of loop") ;
// let str ="Siddharth Kumar";
// let size=0;

// for(let Value of str){
//     console.log("Value is = ",Value);
//     size++;

// }
// console.log(size + " characters are there in the string.");

//for in loop.

// let student = {
//     Name: "Sid",
//     Age : 23,
//     Class:"BSC",
//     grade:95,
//     ispass:true

// };
// for (let key in student){
//     console.log("key",key,"Value = ",student[key]);
// }

// print all the numbers.
// for(let num=0;num<=10;num++){
//     if(num%2==0){
//     console.log("Even Number = ",num);
//     }
// }
// for(let num=0;num<=10;num++){
//     if(num%2!=0){
//     console.log("Odd Number = ",num);
//     }
// }

//practice question.
// let gamenum =25;
// let usernum =prompt("Guess the game number:");

// while(gamenum !=usernum){
//     usernum= prompt("You entered  wrong number , please try again.")
// }
// console.log("Congratulation, You guessed it right!");

// console.log("Template literals");
// let obj={
//     item:"pen",
//     price:10
// }
// let output= `The cost of ${obj.item} is ${obj.price}`;
// console.log(output);

// console.log("The coste of",obj.item,"is",obj.price,"rupees");

// //Tempalate  literals.
// let str=`This is a tempate literals`
// console.log(str);
// console.log(str.length);
// console.log(typeof str);

// console.log("Siddharth \nKumar");
// console.log("Siddharth\rKumar");
// let str=("       Siddharth\tKumar");
// //console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase())
// console.log(str.trim());

let username =prompt("Enter your name : ");
let res = "@"+username+username.length;
console.log(res);