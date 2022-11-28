// Question no:24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let myName ="Saman";
let age=24;
let height =179;
let city="Islamabad";
let hobby ="shopping";
let favPlace="Malam Jabba";
let favFood ="Pasta";
let friend =["Maria","Mahnoor","Sana"];
let favSport="Cricket";
let favPlayer="Afridi";
//Tests for equality and inequality with strings
 let nameTest =myName =="Saman" ? true: false;
 //  Tests using the lower case function
 let cityTest = city== "Islamabad" ? true:false;
 //  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
  let ageTest = age == 23 ?true: false;
  let ageTest1 = age == 24 ? true: false;
  let ageTest2 =age > 24 ? true: false;
  let ageTest3 = age >=  24 ? true: false;
  let ageTest4 =age < 24 ? true: false;
  let ageTest5 = age <= 24 ? true: false;

  // Tests using "and" and "or" operators
  let favSportTest = favSport === "Cricket" ||"Football" ? true: false;
  let favSportTest1 = favSport === " Cricket" && favPlayer ==="Afridi" ? true: false;
   // Test whether an item is in a array
    let friendTest =friend.includes("Maria") ? true:false;
// Test whether an item is not in a array
let friendTest1= !friend.includes("Maria") ?true:false;

console.log(nameTest);
console.log(cityTest);
console.log(ageTest);
console.log(ageTest1);
console.log(ageTest2);
console.log(ageTest3);
console.log(ageTest4);
console.log(ageTest5);
console.log(favSportTest);
console.log(favSportTest1);
console.log(friendTest);
console.log(friendTest1);

