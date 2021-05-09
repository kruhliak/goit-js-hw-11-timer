const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ targetDate }) {
    this.init();
  }

  init() {
    const targetDate = new Date("Jul 17, 2021");
    setInterval(() => {
      const initTime = Date.now();
      const deltaTime = targetDate.getTime() - initTime;
      const time = this.getTimeComponents(deltaTime);
      this.updateTimerValue(time);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  updateTimerValue({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
});

///////Функции без конструктора//////////////////////////////////////////////////////
// function init() {
//   const targetDate = new Date("Jul 17, 2021");
//   setInterval(() => {
//     const initTime = Date.now();
//     const deltaTime = targetDate.getTime() - initTime;
//     const time = getTimeComponents(deltaTime);
//     console.log(time);
//     updateTimerValue(time);
//   }, 1000);
// }

// function pad(value) {
//   return String(value).padStart(2, "0");
// }

// function getTimeComponents(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { days, hours, mins, secs };
// }

// function updateTimerValue({ days, hours, mins, secs }) {
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.mins.textContent = `${mins}`;
//   refs.secs.textContent = `${secs}`;
// }
