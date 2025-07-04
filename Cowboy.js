const wordDisplay = document.getElementById("wordDisplay");
const failDisplay = document.getElementById("fails");
const KeyBoard = document.getElementById("keyboard");
const ReSetGo = document.getElementById("ReStarting");
const Picture = document.getElementById("Change-Photo");
const ReStart = document.getElementById("Re-Start");
const ReStart1 = document.getElementById("Re-Start1");
const TheEnd = document.getElementById("EndGame");
const TheStart = document.getElementById("You-Win");
const TotalCount = document.querySelector("#Total");
const TotalClock = document.getElementById("Hour");

let Fail = 0;
let timer = 30;
let QuickTime = null;
let SlowTime = null;

const word = ["STRAWBERRY", "BLUEBERRY", "BLACKBERRY", "PEACH", "BROCCOLI"];
let SelectedWord = [];

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const RandomGive = Math.floor(Math.random() * 5);
const Giveway = word[RandomGive];
console.log(Giveway);

function PutOn() {
  for (let i = 0; i < letters.length; i++) {
    let alphabet = letters[i];

    const Finger = document.createElement("button");
    Finger.textContent = alphabet;
    KeyBoard.appendChild(Finger);

    Finger.addEventListener("click", function () {
      const clickedLetter = Finger.innerText;

      Finger.disabled = true;
      SelectedWord.push(clickedLetter);
      UnderLine();

      if (!Giveway.includes(clickedLetter)) {
        Fail++;
        TotalCount.innerText = Fail;
        Picture.src = `./${Fail}.jpg`;
      }

      if (Fail >= 7) {
        // alert("GAME OVER");
        const buttons = document.querySelectorAll("#keyboard button");

        for (let i = 0; i < buttons.length; i++) {
          buttons[i].disabled = true;
          TheEnd.style.visibility = "visible";
         
        }
      }
      if (wordDisplay.innerText === Giveway){
        TheStart.style.visibility = "visible";
        timer = 0;
        TotalClock.innerHTML = `${30} sec`;
        TotalCount.innerHTML = "0";

      }
      HourMinutSec();
    });

    // Finger.onclick = function () {

    //   alert("You clicked: " + alphabet);
    //   Finger.disabled = true;
    // };
  }
}

function HourMinutSec() {
  timer = timer - 1;
  TotalClock.innerHTML = timer;
  if (timer <= 0) {
    TotalClock.innerHTML = 0;
    clearInterval(SlowTime);
    clearInterval(QuickTime);
    clearInterval(KeyBoard);
  }
}

function UnderLine() {
  let word = "";
  for (let i = 0; i < Giveway.length; i++) {
    if (Giveway[i] === " " || SelectedWord.includes(Giveway[i])) {
      word = word + Giveway[i];
    } else {
      word = word + "-";
    }
  }
  wordDisplay.innerHTML = word;

  ReStart.addEventListener("click", function () {
    window.location.reload();
    HourMinutSec();
  });
  ReStart1.addEventListener("click", function () {
    window.location.reload();
  });
}

PutOn();
UnderLine();
