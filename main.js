let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = false;
let age = 18;

if (age > 18 && isEarly === true) {
  raceNumber += 1000;
}

if (age > 18 && isEarly === true) {
  console.log(`Early adults run at 9:30 am. Your race number is ${raceNumber}.`);
} else if (age > 18 && isEarly === false) {
  console.log(`Late adults run at 11:00 am. Your race number is ${raceNumber}`);
} else if (age === 18) {
    console.log('See registration desk.');
} else {
  console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}`);
}