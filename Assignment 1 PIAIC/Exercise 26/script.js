// Question 26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let alien_color ="green";
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
 if (alien_color === "green")
 console.log("The player just earned 5 points for shooting the alien.")
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
alien_color = "red";
alien_color !== "green" && console.log("player just earned 10 points");
//Write one version of this program that runs the if block and another that runs the else block.
if (alien_color ==="green"){
    console.log("Player just earned 5 Points")
} else{
    console.log("Player have earned 10 Points");
}