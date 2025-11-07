window.addEventListener("load", () => {});
const lessons = [
  {
    title: "👋 سلام و احوال‌پرسی",
    exercises: [
      {
        type: "choose",
        question: "السلام عليكم",
        options: ["سلام بر شما", "خداحافظ", "صبح بخیر"],
        correct: 0,
      },
      {
        type: "fill",
        question: "أنا ___ بخير",
        answer: "جيداً",
      },
      {
        type: "choose",
        question: "كيف حالك؟",
        options: ["بخير شكراً", "وداعاً", "نعم"],
        correct: 0,
      },
    ],
  },
  {
    title: "🛒 خرید",
    exercises: [
      {
        type: "choose",
        question: "بكم هذا؟",
        options: ["قیمتش چنده؟", "کجاست؟", "چه رنگی است؟"],
        correct: 0,
      },
      {
        type: "choose",
        question: "أريد تفاحة",
        options: ["می‌خواهم سیب", "می‌خواهم آب", "نمی‌دانم"],
        correct: 0,
      },
    ],
  },
  {
    title: "☕ در کافه",
    exercises: [
      {
        type: "choose",
        question: "قهوة من فضلك",
        options: ["یک قهوه لطفاً", "قیمت قهوه", "سلام"],
        correct: 0,
      },
    ],
  },
  {
    title: "🏫 در مدرسه",
    exercises: [
      {
        type: "choose",
        question: "أنا طالب",
        options: ["من دانش‌آموزم", "من معلمم", "من خسته‌ام"],
        correct: 0,
      },
    ],
  },
  {
    title: "🏥 در بیمارستان",
    exercises: [
      {
        type: "choose",
        question: "أشعر بالألم",
        options: ["احساس درد دارم", "احساس شادی دارم", "احساس خواب دارم"],
        correct: 0,
      },
    ],
  },
];

let lessonIndex = 0;
let exIndex = 0;
let score = 0;

const title = document.getElementById("lesson-title");
const scoreBox = document.getElementById("score");
const question = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const startbtn = document.getElementById("start");
const resetbtn = document.getElementById("reset-btn");
let time = 10;
let isStarted = false;

function loadExercise() {
  setTimer();
  const lesson = lessons[lessonIndex];
  const ex = lesson.exercises[exIndex];
  title.textContent = lesson.title;
  question.textContent = ex.question;
  optionsDiv.innerHTML = "";
  nextBtn.classList.add("hidden");

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
      duration: 10000,
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
    score += 10;
    scoreBox.textContent = "امتیاز: " + score;
  } else {
    alert("❌ اشتباه بود!");
    score -= 5;
    scoreBox.textContent = "امتیاز: " + score;
  }
  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
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
      nextBtn.classList.add("hidden");
    }
  }
};
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
  time = 10;
  isStarted = false;

  // بازگرداندن حالت اولیه صفحه
  title.textContent = "";
  question.textContent = "";
  optionsDiv.innerHTML = "";
  scoreBox.textContent = "امتیاز: 0";
  nextBtn.classList.add("hidden");
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
