//Question 3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let myName="SaMan GilLanI";
/* converitng variable into lowercas*/
let lowerCaseName = myName.toLowerCase();
console.log(lowerCaseName);
// Converting variable into Uppercase
let uperCaseName = myName.toUpperCase();
console.log(uperCaseName);
// converting variable into titlecase search
let titleCaseName = myName
.toLowerCase()
.split(" ")
.map((word) => word.replace(word[0], word[0].toUpperCase()))
.join(" ");
 console.log(titleCaseName);

