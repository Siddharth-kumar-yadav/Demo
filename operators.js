// this code prints my name .
console.log("Siddharth Kumar Yadav");
//Arthematic  Operators .
let  x =10;
let  y=3 ;
console.log("Addition :"+ (x+y));
console.log("Subtraction :"+(x-y)) ;
console.log("Multiplication :" +(x*y) ) ;
console.log("Division : "+(x/y)+"\nIntegers Division : " +Math.floor(x/y));
console.log( "Modulus : "+(x%y));
//Exponentional.
console.log("Exponential : ",x**y); // 10 to the power 3 = 1000.
// increment.
console.log("increment:",++x+y,x,y);   // here 'x' is pre incremented.
// Decrement.
console.log("Decrement:",--x+y,x,y);    // here 'x' is pre decremented.

//Logical operators .
let a=9;
let b=4;
if(a==b){
    console.log("Both are equal")
}else if(a>b){
   console.log("First is greater than second one ")
}else{
     console.log("Second is greater than first one ");
}

//Bitwise AND , OR and NOT operator .
let num1=7;
let num2=3;
console.log("AND Operation : "+(num1 & num2));
console.log("OR Operation : "+(num1 | num2));
console.log("NOT Operation : "+~num1);

//Type Casting .
var str="15";
var num=Number(str);
console.log("After Type casting : "+num);

//Ternary operator .
var age=18;
age>=18 ? console.log("You are eligible for voting") : console.log("you are not eligible for voting");
 // assignment operator.
 console.log("Before Assignment : x = "+x+" y = "+y);
 x=y;
 console.log("After Assignment : x = "+x+" y = "+y);

 //comparison operator.
 console.log((10 == 10) + " " + (10 != 10)+" "+(10 > 10)+" "+(10 < 10)+" "+(10 >= 10)+" "+(10 <= 10));
 console.log(10!=10);

 console.log(10 =="10");
 console.log(10  ==="10");
 console.log(10 !=="10");

 //logical operators.
 console.log("logical operators.");
 console.log("And operators");
 console.log(true && true);
 console.log(false && false);
 console.log(true && false);
 console.log("Or Operator");
 console.log(true || false);
 console.log(false || false);
 console.log(true || true);
 console.log("Logical Not");
 console.log(!true);
 console.log(!false);
  //conditional statement.
  let Age =17;
  if(Age>=18){
    console.log("You can vote.");
  }
  if(Age<18){
    console.log("You cannot vote.");
  }
  // modes
  let mode ="light";
  let color;

  if(mode==="Dark"){
    color="Black";
  }
  if(mode==="light"){
    color="White";
  }
  console.log(color);
  // else if  statements with multiple conditions.
  let Num=9;
  if(Num===1) {
  	console.log("One");
  } else if (Num ===2 ) {
  	console.log("Two");
  } else if (Num >2 && Num <4 ){
  	console.log("Three or Four");
  } else {
  	console.log("More than four");
  }
  //if-else
//odd-even.
if(Num%2===0){
    console.log("Even");

}else{
    console.log("Odd");
}
//turnary operator.
let Age2 = 17;
Age2>18?console.log("Adult"):console.log("Teenager");

//Switch case.
let expr = "Apples";
switch (expr) {
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
    case "Apples":
      console.log("Apples are $0.32 a pound.");
      break;
    case "Bananas":
      console.log("Bananas are $0.48 a pound.");
      break;
    case "Cherries":
      console.log("Cherries are $3.00 a pound.");
      break;
    case "Mangoes":
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.");
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
  
  console.log("Is there anything else you'd like?");
  //practice 1.
  //alert/ prompt.
//   let Num3 = prompt("Enter a Number: ");
//   if(Num3 % 5 === 0){
//     console.log(Num3,"is the multiple of 5");
//   }
//   else{
//     console.log(Num3,"is not the multiple of 5");
//   }

//practice 2

let score= 75;
let grade;

if(score>=90 && score<=100){
    grade ="A";
}else if(score >=70 && score <=89){
    grade="B";
}else if (score >=60 && score <=69) {
    grade="C";
}else if (score >=50 && score <=59) {
    grade="D";
}else {
    grade="F";
}
console.log("Your Grade is "+grade);

  
