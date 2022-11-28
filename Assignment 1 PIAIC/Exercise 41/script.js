// Question 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
 let magician =["David Copperfield","Doug Henning","Penn & Teller"];
 function show_magicians(magiciansNames){
    //console.log(`${magician}`);
    magiciansNames.map((item)=>{
        console.log(item)
    });
 }

 show_magicians(magician);
