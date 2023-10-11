const timer = (deadline) => {
  const timerDay = document.querySelector(".count_1").querySelector('span');
  const timerHours = document.querySelector(".count_2").querySelector('span');
  const timerMinutes = document.querySelector(".count_3").querySelector('span');
  const timerSeconds = document.querySelector(".count_4").querySelector('span');

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let day = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, day, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerDay.textContent = getTime.day < 10 ? `0${getTime.day}` : getTime.day;
    timerHours.textContent =
      getTime.hours < 10 ? `0${getTime.hours}` : getTime.hours;
    timerMinutes.textContent =
      getTime.minutes < 10 ? `0${getTime.minutes}` : getTime.minutes;
    timerSeconds.textContent =
      getTime.seconds < 10 ? `0${getTime.seconds}` : getTime.seconds;

    if (getTime.timeRemaining < 0) {
      timerDay.textContent = "00";
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";

      clearInterval(idUpdate);
    }
  };
  let idUpdate = setInterval(updateClock, 1000);
};

export default timer;
