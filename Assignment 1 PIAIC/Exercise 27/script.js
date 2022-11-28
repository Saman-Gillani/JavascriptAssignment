// Question 27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// Version 1
// If the alien is green, print a message that the player earned 5 points.
alien_color = "green";
if (alien_color =="green")
console.log("Player earned 5 points");
//If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color =="yellow") {
    console.log("Player just earned 10 points")
}
//If the alien is red, print a message that the player earned 15 points.
else if(alien_color == "red"){
    console.log("Player earned 15 Points");
}
// Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Version 2
alien_color = "yellow";
if (alien_color =="yellow")
console.log("Player earned 10 points");
//If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color =="green") {
    console.log("Player just earned 5 points")
}
// If the alien is green, print a message that the player earned 5 points.

else if(alien_color == "red"){
    console.log("Player earned 15 Points");
}
//If the alien is red, print a message that the player earned 15 points.
// Version 3
alien_color = "red";
// If the alien is red, print a message that the player earned 15 points.
if (alien_color == "red")
console.log("Player earned 15 points");
//If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color =="yellow") {
    console.log("Player just earned 10 points")
}
//If the alien is green, print a message that the player earned 5 points.

else if(alien_color == "green"){
    console.log("Player earned 5 Points");
}
