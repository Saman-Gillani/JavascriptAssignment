// Question 43:Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each
// array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician = ["David Copperfield","Doug Henning","Penn & Teller"];
let greatMagicians = [];

function show_magician(magicianNames) {
  magicianNames.map((item) => {
    console.log(item);
  });
}

function make_great(magician) {
  for (let i = 0; i < magician.length; i++) {
    greatMagicians[i] = `The Great ${magician[i]}`;
  }
}
make_great(magician);

show_magician(magician);
show_magician(greatMagicians);