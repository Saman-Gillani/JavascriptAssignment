// Question 17:// Q17-Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

let guestList= [ 'Mahnoor','Maria','Sana'];
 let guestList1 =guestList.pop();
 console.log(`${guestList1} Sorry you are not invited on dinner this time.`);
 // Print a message to each of the two people still on your list, letting them know they’re still invited.
 invitation = guestList.map((item) => {
    return`${item} You are still invited on dinner tonight.`;

 });
 console.log(invitation.join("\n"));
