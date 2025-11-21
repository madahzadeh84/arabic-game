window.addEventListener("load", () => {});
const lessons = [
  // درس 1
  {
    title: "درس 1 - سلام و معرفی (التمارین)",
    exercises: [
      {
        type: "choose",
        // هدف: ترجمه جملهٔ عربی → انتخاب ترجمهٔ صحیح
        question: "«يا وَلَدُ، ماذا تَفعَلُ؟» — ترجمهٔ صحیح را انتخاب کن:",
        options: [
          "ای پسر، چه‌کار می‌کنی؟",
          "پسر، کجا می‌روی؟",
          "آیا پسر توست؟",
          "چه چیزی داری؟",
        ],
        correct: 0,
      },
      {
        type: "choose",
        // هدف: تشخیص صحیح/غلط از متن درس
        question:
          "طبق متن درس: «سیبویه اولین کتاب کامل دستور زبان عربی را نوشته است.» آیا درست است؟ (گزینهٔ صحیح را انتخاب کن)",
        options: ["درست", "نادرست", "متن چیزی نگفته", "نمی‌دانم"],
        correct: 0,
      },
      {
        type: "choose",
        // هدف: متضاد/واژه (معجم درس)
        question: "متضاد واژهٔ «سَهْل» (آسان) کدام است؟",
        options: ["سریع", "سخت", "زیبا", "تمیز"],
        correct: 1,
      },
      {
        type: "choose",
        // هدف: مکالمه → انتخاب پاسخ مناسب
        question: "بهترین پاسخ به «هَلْ تَصنَعُ كُرسِيّاً؟» کدام است؟",
        options: [
          "نَعَم؛ أكتُبُ دَرساً.",
          "لَا؛ أَصنَعُ مِنضَدَةً.",
          "نَعَم؛ أذهَبُ إلى البَیت.",
          "لَا؛ أقرَأُ الكِتاب.",
        ],
        correct: 1,
      },
      {
        type: "choose",
        // هدف: تصویرخوانی/درک تصویر
        question: "ترجمهٔ جملهٔ تمرینی «نَلعَبُ كُرةَ المِنضَدَةِ» چیست؟",
        options: [
          "ما فوتبال بازی می‌کنیم.",
          "ما پینگ‌پنگ بازی می‌کنیم.",
          "ما والیبال بازی می‌کنیم.",
          "ما شنا می‌کنیم.",
        ],
        correct: 1,
      },
    ],
  },

  // درس 2
  {
    title: "درس 2 - اهمیت زبان عربی (التمارین)",
    exercises: [
      {
        type: "choose",
        question:
          "چرا آشنایی با زبان عربی در متن کتاب مهم معرفی شده؟ گزینهٔ درست را انتخاب کن:",
        options: [
          "برای فهم بهتر متون دینی و فارسی",
          "زیرا عربی آسان‌تر است",
          "برای سرگرمی",
          "برای علوم محاسباتی",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "«فیروزآبادی معجمی در زبان عربی نوشته است.» آیا این گزاره طبق متن درست است؟",
        options: ["درست", "نادرست", "متن نگفته", "نمی‌دانم"],
        correct: 0,
      },
      {
        type: "choose",
        question: "از ستون معجم: «کُرةُ الْقَدَمِ» برابر کدام است؟",
        options: ["فوتبال", "بستنی", "کتاب", "اتوبوس"],
        correct: 0,
      },
      {
        type: "choose",
        question: "مناسب‌ترین جواب برای «ما اسمُک؟» چیست؟",
        options: [
          "اسمي سَمیرة",
          "أنا بِخَیْر",
          "أیْنَ تَسْکُن؟",
          "مَتَى تَرجِع؟",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question: "ترجمهٔ «أنَا أَدْرُسُ» چیست؟",
        options: [
          "من درس می‌خوانم",
          "من غذا می‌خورم",
          "تو می‌نویسی",
          "او خوابیده",
        ],
        correct: 0,
      },
    ],
  },

  // درس 3
  {
    title: "درس 3 - مِهْنَتُکَ فی المُستقبل (التمارین)",
    exercises: [
      {
        type: "choose",
        question:
          "«ماذا تُحِبُّ أن تَصبِحَ فی المُستقبل؟» — ترجمهٔ درست را انتخاب کن:",
        options: [
          "می‌خواهی در آینده چه شوی؟",
          "الان کجایی؟",
          "چه خوردی؟",
          "چه وقتی می‌آیی؟",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question: "«ماذا یَفعَلُ الطَّبیبُ؟» درست‌ترین گزینه کدام است؟",
        options: ["درمان می‌کند", "می‌رقصد", "می‌نویسد شعر", "می‌خوابد"],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "«جملهٔ مثال: أنَا خَبّازٌ — یعنی من نانوا هستم.» آیا درست است؟",
        options: ["درست", "نادرست", "متن نگفته", "نمی‌دانم"],
        correct: 0,
      },
      {
        type: "choose",
        question: "جواب مناسب برای «ماذا تَعمل؟» کدام است؟",
        options: ["أعملُ فی المستشفى", "أنا بخیر", "ما اسمک", "کجا می‌روی؟"],
        correct: 0,
      },
      {
        type: "choose",
        question: "«سَأصنَعُ کُرْسِیاً» یعنی چه؟",
        options: [
          "من یک صندلی خواهم ساخت",
          "من می‌خوانم",
          "من می‌خوابم",
          "من می‌خرم",
        ],
        correct: 0,
      },
    ],
  },

  // درس 4
  {
    title: "درس 4 - التجرِبة الجدیدة / فعل مضارع (التمارین)",
    exercises: [
      {
        type: "choose",
        question: "«أذْهَبُ إلى المَکتَبَةِ» — ترجمهٔ صحیح را انتخاب کن:",
        options: [
          "من به کتابخانه می‌روم",
          "من کتاب می‌خرم",
          "من می‌خوانم",
          "من می‌آیم",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question: "«أنتَ تَحفَظُ القُرآنَ» این جمله چه فعلی دارد؟",
        options: ["مضارع", "ماضی", "امر", "مجهول"],
        correct: 0,
      },
      {
        type: "choose",
        question: "پاسخ مناسب به «أینَ تَذهبُ؟» چیست؟",
        options: ["إلی المَدرسَةِ", "ما اسمک", "چه خبر", "خداحافظ"],
        correct: 0,
      },
      {
        type: "choose",
        question: "«أَنَا أَکْتُبُ» یعنی چه؟",
        options: ["من می‌نویسم", "تو می‌نویسی", "او نوشت", "آن‌ها می‌نویسند"],
        correct: 0,
      },
      {
        type: "choose",
        question: "از تمرین تصویری: «نَقْرَأُهُ فِی المَکْتَبَةِ» ترجمه چیست؟",
        options: [
          "ما آن را در کتابخانه می‌خوانیم",
          "ما آن را می‌نویسیم",
          "ما آن را می‌خریم",
          "ما آن را می‌بریم",
        ],
        correct: 0,
      },
    ],
  },

  // درس 5
  {
    title: "درس 5 - الدّقّة (فعل مضارع و مستقبل) (التمارین)",
    exercises: [
      {
        type: "choose",
        question:
          "(هدف: ترجمه) «سَأعمَلُ کلَّ یومٍ» — معنیٔ درست را انتخاب کن:",
        options: [
          "من هر روز کار خواهم کرد",
          "من کار می‌کنم امروز",
          "من کار کردم",
          "من کار نمی‌کنم",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "(هدف: تشخیص زمان) جملهٔ «سَوفَ تَفرَحُ» در چه زمانی اتفاق می‌افتد؟",
        options: ["آینده", "حال", "گذشته", "شرطی"],
        correct: 0,
      },
      {
        type: "choose",
        question: "(هدف: مفهوم) «أشرَحُ الدَّرسَ للطّالبات» یعنی چه؟",
        options: [
          "درس را برای دانش‌آموزان دختر توضیح می‌دهم",
          "درس را می‌خرم",
          "درس تمام است",
          "درس را می‌نویسم",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question: "(هدف: مکالمه کوتاه) بهترین پاسخ به «مَتی ترجعُ؟» کدام است؟",
        options: ["بعْدَ ساعَتَین", "الی اللقاء", "اسمک چیست", "خانه خوب است"],
        correct: 0,
      },
      {
        type: "choose",
        question: "(هدف: واژگان) «واجِبی» در جملهٔ تمرینی به چه معناست؟",
        options: ["تکلیف من", "کتاب من", "خانه من", "مدرسه من"],
        correct: 0,
      },
    ],
  },

  // درس 6
  {
    title: "درس 6 - فی السّفر (التمارین)",
    exercises: [
      {
        type: "choose",
        question:
          "(هدف: ترجمه) «أَینَ ذَهَبْتُم أَمْسِ؟» — ترجمهٔ صحیح را انتخاب کن:",
        options: [
          "دیشب کجا رفتید؟",
          "دیشب چه خوردی؟",
          "دیروز کجا هستی؟",
          "الان کجایی؟",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "(هدف: تصویرخوانی/ترجمه) «سَنَذْهَبُ إلی النَّهْرِ بَعْدَ دَقائقٍ» معنی چیست؟",
        options: [
          "ما بعد چند دقیقه به رودخانه می‌رویم",
          "ما الان در رودخانه هستیم",
          "ما به مدرسه می‌رویم",
          "ما می‌خوابیم",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "(هدف: مکالمه) بهترین پاسخ برای «ماذا شاهَدتُم فی الطَریقِ؟» چیست؟",
        options: [
          "مَناظِرَ جَمیِلَة",
          "اسمی چیست",
          "غذا خوردم",
          "به خانه رفتم",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question: "(هدف: درک) «مَن رافَقَکُم فی السَّفَرِ؟» یعنی چه؟",
        options: [
          "چه کسی همراه شما در سفر بود؟",
          "کجا سفر کردید؟",
          "چه چیز خوردی؟",
          "چه زمانی برگشتی؟",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question: "(هدف: لغت) واژهٔ «بَیْتُ جَدّی» کدام است؟",
        options: ["خانهٔ پدربزرگ", "خانهٔ دوست", "مدرسه", "کتابخانه"],
        correct: 0,
      },
    ],
  },

  // درس 7
  {
    title: "درس 7 - «أرضُ اللهِ واسِعَةٌ» (التمارین)",
    exercises: [
      {
        type: "choose",
        question: "(هدف: مفهوم) «واسِعَة» به چه معناست؟",
        options: ["پهناور", "کوچک", "سرد", "گرم"],
        correct: 0,
      },
      {
        type: "choose",
        question: "(هدف: درک آیه/متن) این درس دربارهٔ چه چیزی صحبت می‌کند؟",
        options: ["حرکت و تلاش در زمین", "غذا و آشپزی", "ورزش", "ساختن خانه"],
        correct: 0,
      },
      {
        type: "choose",
        question: "(هدف: ترجمه) «یَسیرُ فی الأَرْضِ» معنی‌اش چیست؟",
        options: [
          "در زمین حرکت می‌کند",
          "در خانه می‌نشیند",
          "می‌نویسد",
          "می‌خورد",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "(هدف: تصویرخوانی) از تمرین تصویری: «نَزرَعُ فی مَزرعَتِنا» یعنی چه؟",
        options: [
          "ما در مزرعه‌مان می‌کاریم",
          "ما می‌خوابیم",
          "ما آواز می‌خوانیم",
          "ما می‌خوریم",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "(هدف: تشخیص درست/نادرست) «هنگام ترکیب مذکر و مؤنث، اجزای جمله مذکر می‌شوند.» آیا این درست است؟",
        options: ["درست", "نادرست", "بستگی دارد", "متن نگفته"],
        correct: 0,
      },
    ],
  },

  // درس 8
  {
    title: "درس 8 - الاعتمادُ عَلَى النّفْس (التمارین)",
    exercises: [
      {
        type: "choose",
        question: "(هدف: ترجمه) «أعتمِدُ عَلَى نَفْسِی» یعنی چه؟",
        options: [
          "به خودم تکیه می‌کنم",
          "به دیگران تکیه می‌کنم",
          "خوابیدن",
          "بازی کردن",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question: "(هدف: معنی) چرا انسان باید تلاش کند؟ (طبق متن تمرینات)",
        options: ["برای موفقیت", "برای استراحت", "برای گریه", "برای فرار"],
        correct: 0,
      },
      {
        type: "choose",
        question: "(هدف: مکالمه) جواب مناسب برای «ماذا فَعَلتَ الیوم؟» چیست؟",
        options: ["درسم را خواندم", "اسمت چیست؟", "کجا می‌روی؟", "من گرسنه‌ام"],
        correct: 0,
      },
      {
        type: "choose",
        question: "(هدف: تصویرخوانی) «سَأُکَمِلُ واجِبی» یعنی چه؟",
        options: [
          "تکلیفم را کامل می‌کنم",
          "من می‌خوابم",
          "من می‌روم",
          "من می‌خرم",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question: "(هدف: واژه) متضاد «نجاح» کدام است؟",
        options: ["فشل/شکست", "سرور", "آرامش", "کتاب"],
        correct: 0,
      },
    ],
  },

  // درس 9
  {
    title: "درس 9 - السَّفْرَةُ العِلْمیَّة (التمارین)",
    exercises: [
      {
        type: "choose",
        question:
          "(هدف: ترجمه) «أینَ ذَهَبَ الطُّلّابُ فِی السَّفِرَةِ؟» — ترجمهٔ صحیح را انتخاب کن:",
        options: [
          "به موزه رفتند",
          "به مدرسه رفتند",
          "به بیمارستان رفتند",
          "به بازار رفتند",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "(هدف: تصویرخوانی) «ماذا شاهَدوا؟» در تمرین: مناسب‌ترین گزینه کدام است؟",
        options: ["آثار قدیمی", "موزیک", "ماشین", "پوشاک"],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "(هدف: مکالمه) «مَن کانَ مَعَهُم فی الرّحْلَةِ؟» — پاسخ مناسب چیست؟",
        options: ["الْمُعَلِّم", "الطّعام", "الکتاب", "الطّائر"],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "(هدف: درک تمرین) «کَتَبُوا فی دَفْتَرِ الملاحظاتِ»: چه نوشته شده است؟",
        options: ["نِقاط السَّفَر", "قِصّه", "شِعر", "خواب"],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "(هدف: عدد/زمان) از تمرین: «دامَتِ السَّفْرَةُ ثَلاثَ ساعَاتٍ» پس کلمهٔ «ثَلاثَ» به چه معناست؟",
        options: ["سه", "دو", "چهار", "پنج"],
        correct: 0,
      },
    ],
  },

  // درس 10
  {
    title: "درس 10 - المَراقِدُ الدّینیَّة (التمارین)",
    exercises: [
      {
        type: "choose",
        question:
          "(هدف: ترجمه) «إلی أَیْنَ زارَ الطُّلّابُ؟» — ترجمهٔ درست را انتخاب کن:",
        options: [
          "به حرم/مزار رفتند",
          "به مدرسه رفتند",
          "به دریا رفتند",
          "به بیمارستان رفتند",
        ],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "(هدف: مفهوم) «ماذا تَتَعَلَّمُ مِن زیارَةِ المَراقدِ؟» بهترین پاسخ کدام است؟",
        options: ["آرامش و عبرت", "خوردنی‌های جدید", "ورزش", "برنامه‌نویسی"],
        correct: 0,
      },
      {
        type: "choose",
        question: "(هدف: واژه) «یُصَلُّونَ» یعنی چه؟",
        options: ["نماز می‌خوانند", "می‌خوابند", "می‌نویسند", "می‌خورند"],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "(هدف: درک) «ما أَثَرُ الزّیارةِ عَلی النّفسِ؟» کدام پاسخ مناسب‌تر است؟",
        options: ["آرامش", "تعب", "گرفتگی", "گرسنگی"],
        correct: 0,
      },
      {
        type: "choose",
        question:
          "(هدف: تصویرخوانی) «ماذا شاهَدَتِ الطّالِباتُ فی الحَرمِ؟» معمولاً چه چیزی دیده می‌شود؟",
        options: ["ضَریح/مَزار", "ورزشگاه", "مدرسه", "نمایشگاه"],
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
