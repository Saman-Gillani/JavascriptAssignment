// Quesion No 42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.

let magician =["David Copperfield","Doug Henning","Penn & Teller"];
 /*function show_magicians(magiciansNames){
    //console.log(`${magician}`);
    magiciansNames.map((item)=>{
        console.log(item)
    });
 }*/

 //show_magicians(magician);

 function make_great(){
    for ( let i=0; i< magician.length;i++){
        magician[i] = `Th Great ${magician[i]}`
    }
    console.log(magician);
 }
 make_great()
 //show_magicians(magician);