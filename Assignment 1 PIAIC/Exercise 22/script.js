// Question 22:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. 
//Make sure you correct the error before closing the program.
let guestList =["Maria",'Mahnoor','Sundas'];
 //error
guestList[5] ="Fatima";
  console.log(guestList);
  // Resolving error by using A filter function that will filter out all the empty values from our array.
  newGuestList = guestList.filter((item) => item.length > 0);
  console.log(newGuestList);