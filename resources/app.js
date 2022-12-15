function randomMessage() {
    positive = ['U will be Wealthy!!','Be Cheerful', 'Be Confident',];
    healthy = ['Work Hard!!','Athletic', 'Active',];
    wealthy = ['Do it scared','U will be Rich','Cash Money For You',];
    blessed = ['Look how far you have come!!','Good Things To Come!!','You Will Be Blessed!',];

    const randomize = (array) => {
    return array[Math.floor(Math.random()*array.length)];
};

let fortuneCookie = randomize(positive) + ", " + randomize(healthy) + ", " +  randomize(wealthy) + ", " + randomize(blessed);

document.getElementById("message").innerHTML = fortuneCookie;
}
  
  