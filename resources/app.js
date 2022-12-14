function randomMessage() {
    positive = ['U will be Wealthy!!','Be Cheerful', 'Be Confident',];
    healthy = ['Work Hard!!','Athletic', 'Active',];
    wealthy = ['Do it scared','U will be Rich','Cash Money',];
    blessed = ['Look how far you have come!!','Good Things To Come!!',];

    const randomize = (array) => {
    return array[Math.floor(Math.random()*array.length)];
};

let mealMaker = randomize(positive) + ", " + randomize(healthy) + ", " +  randomize(wealthy) + ", " + randomize(blessed);

document.getElementById("message").innerHTML = mealMaker;
}
  
  