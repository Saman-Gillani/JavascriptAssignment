//Question 35:Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal.



let animal =["Cat","dogs","goats"];
for ( let i =0; i<animal.length ; i++){
    console.log(animal[i])
}
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
for ( let i =0; i<animal.length ; i++){
    console.log(`${animal[i]} would make a great pet.`)
}
//• Add a line at the end of your program stating what these animals have in common. 
//You could print a sentence such as Any of these animals would make a great pet!
console.log(`${animal[0]} ,${animal[1]} and ${animal[2]} are mammals.They have four legs and one tail in common.They are hardy and easily adapt to changing conditions.Any of these animals would make a great pet`
);