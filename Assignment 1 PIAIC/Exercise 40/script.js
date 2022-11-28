// Question 40:Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
//Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 //Make at least one new function call that includes the number of tracks on an album.

function make_album( artist,album,track="null"){
    let albumDir= {
        artist,
        album,
        track,
    };
    return albumDir;
}
console.log(make_album("Atif Aslam","Doorie"));
console.log(make_album("Arijit Singh","Tum hi ho",5));
let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];
while (fibonacciArray.length < 25) {
 fibonacciArray.push(nr1);
 temp = nr1 + nr2;
 nr1 = nr2;
 nr2 = temp;
}
console.log(fibonacciArray)



