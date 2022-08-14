// setTimout & setInterval

// setTimout

// setTimeout(() => {
//   console.log("Hello world");
// }, 3000);

// function callMe() {
//   console.log("Hello Javascript");
// }
// setTimeout(() => {
//   callMe();
// }, 3000);

// setInterval

// let a = 0;
// let timerInerval = setInterval(() => {
//   a++;
//   console.log(a);
// }, 1000);

// setTimeout(() => {
//   clearInterval(timerInerval);
// }, 10000);

// Topshiriq:)

const timer = document.querySelector("#timer");
const timerBtn = document.querySelector("#timer_btn");
const timerStopBtn = document.querySelector("#timerStop_btn");
const by = document.querySelector('small')
const href = document.querySelector('a')

timer.textContent = 0;

timerBtn.addEventListener("click", () => {

  let setNumber = setInterval(() => {
    timer.textContent++;
  }, 1000);
  timer.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  timer.style.backdropFilter = "blur(5px)";
  timer.style.padding = "15px 40px";

  timerStopBtn.addEventListener("click", () => {
    setTimeout(() => {
      clearInterval(setNumber);
    });
  });

});

by.style.position = "absolute";
by.style.color = "black";
by.style.bottom = "30px";
by.style.fontSize = "20px";
href.style.textDecoration = "none";
href.style.color = "black";