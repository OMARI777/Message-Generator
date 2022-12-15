function randomMessage() {
    positive = ['U Will Be Wealthy!!','Be Cheerful', 'Be Confident','Love All',];
    healthy = ['Work Hard!!','Athletic', 'Active','Stay Hungry','Think Big'];
    wealthy = ['Do It Scared','U Will Be Rich','Cash Money For You','Move Mountains',];
    blessed = ['Look How Far You Have Come!','Good Things To Come!!','You Will Be Blessed!',];

    const randomize = (array) => {
    return array[Math.floor(Math.random()*array.length)];
};

let fortuneCookie = randomize(positive) + ", " + randomize(healthy) + ", " +  randomize(wealthy) + ", " + randomize(blessed);

document.getElementById("message").innerHTML = fortuneCookie;
}
  
  