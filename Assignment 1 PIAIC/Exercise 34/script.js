// Question 34:Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let favPizza =["Chicken Fajita Pizza","Cheese Pizza","BBQ Pizza"]
for (i =0; i<favPizza.length; i++){
    console.log(`${favPizza[i]}`)
}
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let i =0 ; i<favPizza.length ; i++){
    console.log(`I like ${favPizza[i]}`);
}
// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

console.log("Pizza  is my all time favorite food.It makes you smile.It really like pizza parties.I really love pizza!")
