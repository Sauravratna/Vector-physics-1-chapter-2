// HSC Physics 1st Paper - Chapter 2 (Vector) 30 Questions
const quizData = [
    {
        question: "১. দুটি সমমানের ভেক্টর কোনো বিন্দুতে কত কোণে ক্রিয়া করলে তাদের লব্ধির মান যেকোনো একটি ভেক্টরের মানের সমান হবে?",
        options: ["0°", "60°", "90°", "120°"],
        correct: 3
    },
    {
        question: "২. দুটি ভেক্টর A ও B এর ডট গুণন (Dot Product) শূন্য হলে ভেক্টরদ্বয়ের মধ্যবর্তী কোণ কত?",
        options: ["0°", "45°", "90°", "180°"],
        correct: 2
    },
    {
        question: "৩. কোনো ভেক্টরের কার্ল (Curl) শূন্য হলে ভেক্টরটি কেমন হবে?",
        options: ["ঘূর্ণনশীল", "অঘূর্ণনশীল", "সংরক্ষণশীল নয়", "সোলেনয়ডাল"],
        correct: 1
    },
    {
        question: "৪. ডাইভারজেন্স (Divergence) এর মান ঋণাত্মক হলে প্রবাহের প্রকৃতি কেমন হয়?",
        options: ["তরল প্রসারিত হচ্ছে", "তরল সংকুচিত হচ্ছে", "প্রবাহ ধ্রুবক", "কোনোটিই নয়"],
        correct: 1
    },
    {
        question: "৫. |A × B| = A · B হলে, A এবং B ভেক্টরদ্বয়ের মধ্যবর্তী কোণ কত?",
        options: ["0°", "30°", "45°", "90°"],
        correct: 2
    },
    {
        question: "৬. সামান্তরিকের দুটি সংলগ্ন বাহু দ্বারা দুটি ভেক্টর নির্দেশিত হলে, সামান্তরিকের ক্ষেত্রফল কোনটি?",
        options: ["A · B", "|A × B|", "1/2 |A × B|", "|A + B|"],
        correct: 1
    },
    {
        question: "৭. একটি ভেক্টর A = 3i + 4j হলে, xy সমতলে এর মান কত?",
        options: ["5", "7", "25", "1"],
        correct: 0
    },
    {
        question: "৮. অবস্থান ভেক্টরের (Position Vector) অপর নাম কী?",
        options: ["একক ভেক্টর", "সসীম ভেক্টর", "ব্যাসার্ধ ভেক্টর (Radius vector)", "শূন্য ভেক্টর"],
        correct: 2
    },
    {
        question: "৯. তিনটি ভেক্টর দ্বারা একটি আবদ্ধ ত্রিভুজ গঠিত হলে এবং এরা একই ক্রমে নির্দেশিত হলে ভেক্টর তিনটির যোগফল কত?",
        options: ["1", "3", "শূন্য (0)", "অসীম"],
        correct: 2
    },
    {
        question: "১০. ∇ · V = 0 হলে ভেক্টর ক্ষেত্রটিকে কী বলা হয়?",
        options: ["ঘূর্ণনশীল", "অঘূর্ণনশীল", "সোলেনয়ডাল (Solenoidal)", "সংরক্ষণশীল"],
        correct: 2
    },
    {
        question: "১১. দুটি ভেক্টরের ক্রস গুণনের (Cross Product) মান সর্বোচ্চ হয় যখন তাদের মধ্যবর্তী কোণ কত?",
        options: ["0°", "45°", "90°", "180°"],
        correct: 2
    },
    {
        question: "১২. দুটি ভেক্টরের স্কেলার গুণফল শূন্য হলে ভেক্টর দুটি কেমন?",
        options: ["পরস্পর সমান্তরাল", "পরস্পর লম্ব", "একইমুখী", "বিপরীতমুখী"],
        correct: 1
    },
    {
        question: "১৩. i · (j × k) এর মান কত?",
        options: ["0", "1", "-1", "i"],
        correct: 1
    },
    {
        question: "১৪. i × i এর মান কত?",
        options: ["0", "1", "k", "-k"],
        correct: 0
    },
    {
        question: "১৫. ∇ (Grad/Del Operator) মূলত একটি কী ধরনের অপারেটর?",
        options: ["স্কেলার অপারেটর", "ভেক্টর ডিফারেনশিয়াল অপারেটর", "বীজগাণিতিক অপারেটর", "কোনোটিই নয়"],
        correct: 1
    },
    {
        question: "১৬. কোনো স্কেলার ক্ষেত্রের গ্রেডিয়েন্ট (Gradient) একটি কী রাশি?",
        options: ["স্কেলার রাশি", "ভেক্টর রাশি", "ধ্রুবক রাশি", "অসীম রাশি"],
        correct: 1
    },
    {
        question: "১৭. দুটি সমমানের ভেক্টরের লব্ধির সর্বোচ্চ মান কত হবে?",
        options: ["ভেক্টর দুটির গুণফলের সমান", "যেকোনো একটির সমান", "যেকোনো একটির দ্বিগুণ (2P)", "শূন্য"],
        correct: 2
    },
    {
        question: "১৮. দুটি ভেক্টরের লব্ধির সর্বনিম্ন মান পেতে হলে ভেক্টরদ্বয়ের মধ্যবর্তী কোণ কত হতে হবে?",
        options: ["0°", "90°", "120°", "180°"],
        correct: 3
    },
    {
        question: "১৯. লব্ধির দিক নির্ণয়ের জন্য ত্রিভুজ সূত্রে কোন ত্রিকোণমিতিক অনুপাত বেশি ব্যবহৃত হয়?",
        options: ["sine", "cosine", "tangent (tan)", "secant"],
        correct: 2
    },
    {
        question: "২০. যে ভেক্টরের মান শূন্য তাকে কী ভেক্টর বলে?",
        options: ["একক ভেক্টর", "নাল বা শূন্য ভেক্টর (Null vector)", "সদৃশ ভেক্টর", "অবস্থান ভেক্টর"],
        correct: 1
    },
    {
        question: "২১. কোনো ভেক্টরকে তার মান দিয়ে ভাগ করলে কী পাওয়া যায়?",
        options: ["শূন্য ভেক্টর", "একক ভেক্টর (Unit vector)", "বিপরীত ভেক্টর", "সমান্তরাল ভেক্টর"],
        correct: 1
    },
    {
        question: "২২. বৃষ্টির ফোঁটা খাড়া নিচের দিকে পড়লে এবং আপনি হেঁটে গেলে ছাতা কত কোণে ধরতে হবে?",
        options: ["tanθ = v_man / v_rain", "tanθ = v_rain / v_man", "sinθ = v_man / v_rain", "cosθ = v_rain / v_man"],
        correct: 0
    },
    {
        question: "২৩. সবচেয়ে কম সময়ে নদী পার হতে হলে সাঁতারুকে কোন দিকে সাঁতার দিতে হবে?",
        options: ["স্রোতের সাথে ৯০° কোণে", "স্রোতের প্রতিকূলে", "স্রোতের অনুকূলে", "নদীর তীরের সমান্তরালে"],
        correct: 0
    },
    {
        question: "২৪. সোজাসুজি নদী পার হতে (নূন্যতম দূরত্বে) হলে সাঁতারুকে কোন দিকে রওয়ানা দিতে হবে?",
        options: ["স্রোতের সাথে ৯০° কোণে", "স্রোতের সাথে স্থূলকোণে (α > 90°)", "স্রোতের সাথে সূক্ষ্মকোণে (α < 90°)", "স্রোতের সমান্তরালে"],
        correct: 1
    },
    {
        question: "২৫. দুটি ভেক্টরের ভেক্টর গুণন (Cross Product) কোন নিয়ম মেনে চলে না?",
        options: ["বণ্টন সূত্র", "বিনিময় সূত্র (Commutative law)", "সংযোজন সূত্র", "কোনোটিই নয়"],
        correct: 1
    },
    {
        question: "২৬. A = 2i + 3j - k এবং B = -4i - 6j + 2k ভেক্টর দুটি পরস্পর কেমন?",
        options: ["লম্ব", "সমান্তরাল", "সমান", "একক ভেক্টর"],
        correct: 1
    },
    {
        question: "২৭. ত্রিমাত্রিক কার্তেসীয় স্থানাঙ্ক ব্যবস্থায় আয়ত একক ভেক্টর কয়টি?",
        options: ["২টি", "৩টি (i, j, k)", "৪টি", "৬টি"],
        correct: 1
    },
    {
        question: "২৮. স্কেলার ট্রিপল প্রোডাক্ট A · (B × C) কী নির্দেশ করে?",
        options: ["ত্রিভুজের ক্ষেত্রফল", "সামান্তরিকের ক্ষেত্রফল", "সামান্তরিকীয় ঘনকের (Parallelepiped) আয়তন", "বৃত্তের পরিধি"],
        correct: 2
    },
    {
        question: "২৯. ডাইভারজেন্সের (Divergence) মান ধনাত্মক হলে কী বোঝায়?",
        options: ["ঘনত্ব বৃদ্ধি পাচ্ছে", "আয়তন হ্রাস পাচ্ছে", "তরল প্রসারিত হচ্ছে বা ঘনত্ব হ্রাস পাচ্ছে", "প্রবাহ স্থির রয়েছে"],
        correct: 2
    },
    {
        question: "৩০. কোনো ভেক্টর A এর ওপর Y-অক্ষের উপাংশ (Projection) কত হবে যদি A = A_x i + A_y j + A_z k হয়?",
        options: ["A_x", "A_y", "A_z", "|A|"],
        correct: 1
    }
];

let currentQuestion = 0;
let userAnswers = new Array(quizData.length).fill(null);
let timeLeft = 1800; // ৩০ মিনিট (৩০ * ৬০ সেকেন্ড)
let timerInterval;

// প্রশ্ন লোড করা
function loadQuestion() {
    const qData = quizData[currentQuestion];
    document.getElementById("question-text").innerText = qData.question;
    
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    qData.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        if (userAnswers[currentQuestion] === index) {
            btn.classList.add("selected");
        }
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });

    // নেভিগেশন বাটন আপডেট
    document.getElementById("prev-btn").disabled = currentQuestion === 0;
    
    if (currentQuestion === quizData.length - 1) {
        document.getElementById("next-btn").classList.add("hidden");
        document.getElementById("submit-btn").classList.remove("hidden");
    } else {
        document.getElementById("next-btn").classList.remove("hidden");
        document.getElementById("submit-btn").classList.add("hidden");
    }
}

// অপশন সিলেক্ট করা
function selectOption(index) {
    userAnswers[currentQuestion] = index;
    loadQuestion();
}

// আগের প্রশ্ন
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// পরের প্রশ্ন
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

// টাইমার চালু করা
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("timer").innerText = `সময়: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

// সাবমিট করা এবং রেজাল্ট দেখানো
function submitQuiz() {
    clearInterval(timerInterval);
    let score = 0;
    userAnswers.forEach((ans, index) => {
        if (ans === quizData[index].correct) {
            score++;
        }
    });

    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    document.getElementById("score").innerText = score;

    let feedback = "";
    if (score >= 24) feedback = "চমৎকার! আপনার প্রস্তুতি খুবই ভালো।";
    else if (score >= 15) feedback = "ভালো হয়েছে, তবে আরেকটু অনুশীলন দরকার।";
    else feedback = "অধ্যায়টি আবার ভালো করে পড়া উচিত।";

    document.getElementById("feedback-text").innerText = feedback;
}

// ওয়েবসাইট চালুর সময় চালু হবে
loadQuestion();
startTimer();
  
