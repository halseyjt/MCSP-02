// Write a function that takes in a string of the time and returns the time in military format.
//Ex: militaryTime('7:47pm') returns '19:47'

militaryTime = (timeStr) => {
  let colon = timeStr.indexOf(':');
  let hours = timeStr.substr(0, colon),
    minutes = timeStr.substr(colon + 1, 2),
    meridian = timeStr.substr(colon + 4, 2).toUpperCase();


  let hoursInt = parseInt(hours, 10),
    offset = meridian == 'PM' ? 12 : 0;

  if (hoursInt === 12) {
    hoursInt = offset;
  } else {
    hoursInt += offset;
  }
  return hoursInt + ":" + minutes;
}

console.log(militaryTime('1:30 PM'));

