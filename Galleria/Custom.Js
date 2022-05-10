function show() {
    document.getElementById("more").innerHTML = "There is a lot of ways to own part of our products or our limitited peices only you need to enter your ifo and we will contact with you directly feel free with us as you are a pallete of joyfull colors.";
}
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("Days").innerHTML = "Today is " + day;
