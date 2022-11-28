// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, 
//inviting them to dinner.
let guestList= [ 'Mahnoor','Maria','Sana'];
let invitation = guestList.map( (item) => {
    return `${item} You are invited on dinner tomorrow.`;
    
});
console.log(invitation.join("\n"));