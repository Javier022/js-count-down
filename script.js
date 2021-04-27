const getRemainTime = (deadline) => {
  let currentDate = new Date(),
    // deadline: date to expire count
    totalTime = (new Date(deadline) - currentDate + 1000) / 1000,
    secondsTime = ("0" + Math.floor(totalTime % 60)).slice(-2),
    minutesTime = ("0" + Math.floor((totalTime / 60) % 60)).slice(-2),
    hoursTime = ("0" + Math.floor((totalTime / 3600) % 24)).slice(-2),
    dayTime = Math.floor(totalTime / (3600 * 24));
  // console.log(totalTime);
  return {
    totalTime,
    secondsTime,
    minutesTime,
    hoursTime,
    dayTime,
  };
};

const dateTimer = (date, element, finalTimerMessage) => {
  let elementDom = document.getElementById(element);
  if (elementDom) {
    const timerCount = setInterval(() => {
      const timer = getRemainTime(date);
      elementDom.style.fontSize = "2em";
      elementDom.innerHTML = `${timer.dayTime}días - ${timer.hoursTime}h - ${timer.minutesTime}min - ${timer.secondsTime}s`;

      if (timer.totalTime <= 1) {
        clearInterval(timerCount);
        elementDom.textContent = finalTimerMessage;
      }
    }, 1000);
  }
};

// date expire my birthay
dateTimer(
  "Sep 22 2021 00:00:00 GMT-0600",
  "clock",
  "Terminó la cuenta regresiva"
);
