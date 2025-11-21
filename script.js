let lessons = [];

window.addEventListener("load", () => {
  lessons = window.question.lessons;
});

let lessonIndex = 0;
let exIndex = 0;
let score = 0;

const title = document.getElementById("lesson-title");
const scoreBox = document.getElementById("score");
const question = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const startbtn = document.getElementById("start");
const resetbtn = document.getElementById("reset-btn");
let time = 300;
let isStarted = false;

function loadExercise() {
  setTimer();
  const lesson = lessons[lessonIndex];
  const ex = lesson.exercises[exIndex];
  title.textContent = lesson.title;
  question.textContent = ex.question;
  optionsDiv.innerHTML = "";

  if (ex.type === "choose") {
    ex.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(i === ex.correct);
      optionsDiv.appendChild(btn);
    });
  } else if (ex.type === "fill") {
    const input = document.createElement("input");
    input.placeholder = "جای خالی را پر کن";
    input.style.padding = "10px";
    input.style.borderRadius = "10px";
    input.style.textAlign = "center";
    input.style.fontSize = "18px";

    const btn = document.createElement("button");
    btn.textContent = "بررسی";
    btn.onclick = () => checkAnswer(input.value.trim() === ex.answer);

    optionsDiv.appendChild(input);
    optionsDiv.appendChild(btn);
  }
}

function checkAnswer(correct) {
  if (correct) {
    Toastify({
      text: "جواب درست را انتخاب کردی",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },

      onClick: function () {}, // Callback after click
    }).showToast();
    exIndex++;
    const lesson = lessons[lessonIndex];
    if (exIndex < lesson.exercises.length) {
      loadExercise();
    } else {
      lessonIndex++;
      exIndex = 0;
      if (lessonIndex < lessons.length) {
        alert("🎉 مرحله " + lesson.title + " تمام شد!");
        loadExercise();
      } else {
        question.textContent = "🌟 تبریک! همه‌ی مراحل رو گذروندی!";
        optionsDiv.innerHTML = "";
      }
    }
    score += 10;
    scoreBox.textContent = "امتیاز: " + score;
  } else {
    Toastify({
      text: "جوابت اشتباه بود.",
      duration: 10000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #b00000ff, #ffedd2ff)",
      },

      onClick: function () {}, // Callback after click
    }).showToast();
    score -= 5;
    scoreBox.textContent = "امتیاز: " + score;
  }
}

let timerCount = null; // تعریف متغیر سراسری تایمر

function setTimer() {
  let timer = document.getElementById("timer");

  // اگر تایمر قبلی وجود داشت، متوقفش کن
  if (timerCount) {
    clearInterval(timerCount);
  }

  timerCount = setInterval(() => {
    time--;
    timer.textContent = "⏱ " + time + " ثانیه";

    timer.classList.remove("warning", "danger");
    if (time <= 10 && time > 5) {
      timer.classList.add("warning");
    } else if (time <= 5) {
      timer.classList.add("danger");
    }

    if (time <= 0) {
      clearInterval(timerCount);
      alert("⏰ زمان شما به اتمام رسید.");
      showModal();
    }
  }, 1000);
}

function showModal() {
  const modal = document.getElementById("modal");
  const finalScore = document.getElementById("final-score");
  finalScore.textContent = "امتیاز نهایی شما: " + score;
  modal.style.display = "flex";
}

document.getElementById("reset-btn").onclick = function () {
  resetGame();
};

function resetGame() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";

  // ریست متغیرها
  lessonIndex = 0;
  exIndex = 0;
  score = 0;
  time = 300;
  isStarted = false;

  // بازگرداندن حالت اولیه صفحه
  title.textContent = "";
  question.textContent = "";
  optionsDiv.innerHTML = "";
  scoreBox.textContent = "امتیاز: 0";

  startbtn.classList.remove("hidden");
  document.getElementById("timer").textContent = "";
}

function startGame() {
  isStarted = true;

  if (isStarted == true) {
    loadExercise();
    startbtn.classList.add("hidden");
  } else {
    startbtn.classList.remove("hidden");
    console.log("finish");
  }
}
