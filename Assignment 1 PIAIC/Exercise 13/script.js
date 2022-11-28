//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”
let favTransport = [ 'motorcycle','car', 'bicycle', 'aeroplane'];
/*Here we are using the map function to iterate through the favArray and return a new array with
the values of the favArray added with the strings in the switch statement. */
let result = favTransport.map((item) => {
    switch (item) {
      case "motorcycle":
        return "I want to drive heavy bike";
        break;
      case "car":
        return "My dream is to buy a new Tesla Car ";
        break;
      case "bicycle":
        return "I left my bicycle out in the rain";
        break;
      case "aeroplane":
        return "The airplane took off ten minutes ago";
        break;
      default:
    }
  });
  console.log(result.join("\n"));