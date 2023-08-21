import Countdown from "./countdown.js";

const daysUntilChristmas = new Countdown("31 December 2023 23:59:59 GMT-0300");
console.log(daysUntilChristmas);
setInterval(() => {
  console.log(
    Math.floor(daysUntilChristmas._daysUntilFutureDate) +
      " dias " +
      Math.floor(daysUntilChristmas._hoursUntilFutureDate % 24) +
      " horas " +
      Math.floor(daysUntilChristmas._minutesUntilFutureDate % 60) +
      " minutos " +
      Math.floor(daysUntilChristmas._secondsUntilFutureDate % 60) +
      " segundos "
  );
}, 1000);
