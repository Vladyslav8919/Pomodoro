const btns = document.querySelector(".btns");
const btnClear = document.querySelector(".btnClear");
const startHeading = document.querySelector(".start-heading");

let timer;

// const clearTimer = function()

const startTimer = function (t) {
  let time = t;

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    startHeading.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      startHeading.textContent = "Take a break or start your new Pomodoro";
      const sound = new Audio("audio.wav");
      sound.play();
    }

    time--;
  };

  tick();

  if (timer) clearInterval(timer);

  timer = setInterval(tick, 1000);

  btnClear.addEventListener("click", function () {
    clearInterval(timer);
    startHeading.textContent = "Take a break or start your new Pomodoro";
  });

  return timer;
};

btns.addEventListener("click", function (e) {
  const btn = e.target;

  if (!btn) return;

  if (btn.classList.contains("btn")) {
    startTimer(e.target.dataset.time);
  }
});
