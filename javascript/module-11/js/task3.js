// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

class CountdownTimer {
  constructor(obj) {
    this.timerDiv = document.querySelector(obj.selector);

    this.days = this.timerDiv.querySelector('span[data-value="days"]');
    this.hours = this.timerDiv.querySelector('span[data-value="hours"]');
    this.minutes = this.timerDiv.querySelector('span[data-value="mins"]');
    this.seconds = this.timerDiv.querySelector('span[data-value="secs"]');

    let time = obj.targetDate.getTime() - Date.now();
    this.recountTime(time);

    setInterval(() => {
      time = obj.targetDate.getTime() - Date.now();
      this.recountTime(time);
    }, 1000);
  }

  recountTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const minutes = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.printTimer({ days, hours, minutes, seconds });
  }

  pad(time) {
    return String(time).padStart(2, 0);
  }

  printTimer({ days, hours, minutes, seconds }) {
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.minutes.textContent = minutes;
    this.seconds.textContent = seconds;
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});
