//Query selectors of the clock hands elements in the html file
const hourHand = document.querySelector(".hours");
const minuteHand = document.querySelector(".minutes");
const secondHand = document.querySelector(".seconds");

function updateClock() {
  const date = new Date(); //Get the users date and hour
  const hours = date.getHours(); //Get the currrent user hour
  const minutes = date.getMinutes(); //Get the currrent user minute
  const seconds = date.getSeconds(); //Get the currrent user seconds
  //Get the degrees depending of the user values of hour, minutes and seconds
  const hourDegrees = (hours + minutes / 60) * 30 + 180; // 30 degrees per hour, the +180 degrees are because all the clock hands start pointing to the botttom of the clock (what would be the 6)
  const minuteDegrees = (minutes / 60) * 360 + 180; // 6 degrees per minute
  const secondDegrees = (seconds / 60) * 360 + 180;
  //Add the rotation to the clock hands depending on the user time
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(updateClock, 1000); //Set an interval so the clock changes by itself runing the function every second.
