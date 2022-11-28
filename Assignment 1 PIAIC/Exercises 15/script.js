// Q15-Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
let guestList= [ 'Mahnoor','Maria','Sana'];
let invitation = guestList.map( (item) => {
    return `${item} You are invited on dinner tomorrow.`;
    
});
console.log(invitation.join("\n"));
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`${guestList[1]} is not available for dinner`);
 // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
 guestList[1] ="Sundas";
// • Print a second set of invitation messages, one for each person who is still in your list.
 let newInvitation = guestList.map((item) => {
    return `${item} You are Invited for dinner tonight `;
  });
  
  console.log(newInvitation.join("\n"));
