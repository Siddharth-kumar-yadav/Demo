// let me="Siddharth Kumar yadav";
// let marks=[95,87,65];
// console.log(marks);
// console.log(marks.length);

//let heros=["salman","virat", "dravid","Akash","Abhi", "Rohit"]; 
//for loop.
// for(let idx=0;idx<heros.length;idx++){
//     console.log(heros[idx]);
// }
//for of loop.
// for (let hero of heros){
//     console.log(hero);
// }

// let cities=["Muzaffarpur","patna","vaishali","gaya","mahubani"]
// for (let city of cities){
//     console.log(city.toUpperCase());

// }

// let marks=[89,98,79,97,96,95,80,58,89]
// let sum=0;

// for(let val of marks){
//     sum+=val;
// }
// let avg = sum/ marks.length;
// console.log(`The avg marks of the class is: ${avg}`);

//practice que 2.
//let items=[250,264,300,900,50];
// let i=0;
// let offer=prompt("Enter how much offers you want to give?")

// for(let val of items){
//     console.log(`Value at index ${i} = ${val}`);
//     let offer=val / 10;
//     items[i] = items[i]-offer;
//     console.log(`Value after offer = ${items[i]}`);
//     i++;
// }
// console.log(items);
// console.log("After offers");
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]-=offer;
// }
// console.log(items);

//practice que 3.
//let fooditems=["apple","banana","litchi","papaya"];
 //console.log(fooditems);
// fooditems.push("pineapple",'gawava');
// console.log(fooditems);
// fooditems.pop("apple");
// console.log(fooditems);
// let deleteditem=fooditems.pop();
// console.log(fooditems);
// console.log("Deleted",deleteditem);
//console.log(fooditems.toString());
// let marvles=["thor","rock","tom"];
// let chai=["greentea","darktea"];
// let indchai=["chaibiscuit","thelachai"];
// let fav=marvles.concat(chai,indchai);
// console.log(fav);

// let marvles=["thor","rock","tom"];
// marvles.unshift("Antman","ironman");
// console.log(marvles);
// let val=marvles.shift();
// console.log("Deleted",val);
// console.log(marvles);

// let marvles=["thor","rock","ramu","gobhi","fulghuvi","tom"];
// console.log(marvles);
// console.log(marvles.slice());
// console.log(marvles.splice(2,1,"ram"));
// console.log(marvles)

// let arr=[1,2,3,4,5,6,7,8,9,10];
// console.log("full array",arr);
// //add element.
// arr.splice(2,0,101);
// console.log("added 1 array",arr);
// //delete element.
// arr.splice(9,1,0);
// console.log("Deleted 1 array",arr);
// //replace element.
// arr.splice(8,1,300);
// console.log("replace 1 array",arr);

//practice que.
let companies=["Bloomberg","microsoft","google","ibm","uber","Netflex"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(4,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
