const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mol");
const timeleft = document.querySelector("#time-left");
const score = document.querySelector("#score");
let hitPosition;
let currentTime = 60;
let result = 0;
let timeId = null;

//to put a mole
function randomSquare() {
  squares.forEach((square) => square.classList.remove("mole"));

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      console.log(result);
      score.textContent = result;
      hitPosition = null;
    }
  });
});
function moveMole() {
  timerId = setInterval(randomSquare, 500);
}
moveMole();

function countDown() {
  currentTime--;
  timeleft.textContent = currentTime;
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timeId);
  }
}
let countDownTimerId = setInterval(countDown, 1000);
