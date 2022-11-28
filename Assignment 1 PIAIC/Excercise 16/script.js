// Question 16:More Guests: You just found a bigger dinner table, so now more 
//space is available. Think of three more guests to invite to dinner.
let guestList= [ 'Mahnoor','Maria','Sana'];
let invitation = guestList.map( (item) => {
    return `${item} You are invited on dinner tomorrow.`;
    
});
console.log(invitation.join("\n"));
console.log(`${guestList[1]} is not available for dinner`);
guestList[1] ="Sundas";
//// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you 
//found a bigger dinner table.
console.log("We have more space for guests avaialable on our dinner tomorrow.")
 guestList.unshift("Asifa");
 //console.log(guestList);
 //Adding one more guest through splice method
  guestList.splice(1,0,"Fatima");
  let newInvitation= guestList.map((item)=>{
 return `${item} You are invited on dinner tonight.`;
  });
  console.log(newInvitation.join("\n"));

