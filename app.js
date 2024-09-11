const questions = document.getElementById("questions");
const responseContainer = document.getElementById("response-container");
const restatBtn = document.getElementById("restart");
const startBtn = document.getElementById("start");

// ======= RESTORE THE QUIZ 👇🏻 ==================================================
restatBtn.addEventListener("click", () => {
  questions.innerHTML = "";
  responseContainer.innerHTML = "";
  startBtn.classList.remove("hide");
  startBtn.textContent = "Commencer";
});

// ====== GENERATE QUESTIONS & RESPONSES 👇🏻 =====================================
startBtn.addEventListener("click", generateQuestion);

function generateQuestion() {
  startBtn.textContent = "Suivant";
  startBtn.classList.add("hide");

  const randomQuestion = Math.floor(Math.random() * quizs.length);
  questions.innerHTML = quizs[randomQuestion].question;

  const res = quizs[randomQuestion].response;
  res.forEach((data) => {
    const questionItem = document.createElement("p");

    questionItem.innerHTML = `${data.text}`;

    responseContainer.appendChild(questionItem);
  });
}

// ================== QUIZ DATA 👇🏻==========================================
const quizs = [
  {
    question: "Comment afficher 'Bonjour' en console ❓",
    response: [
      { text: "console.log('Bonjour')", correct: true },
      { text: "console.table('Bonjour')", correct: false },
      { text: "console('Bonjour')", correct: false },
      { text: "log('Bonjour')", correct: false },
    ],
  },
  {
    question: "Comment selectionner la balise p avec id='id' ❓",
    response: [
      { text: "select('#id')", correct: false },
      { text: "getElementById('id')", correct: false },
      { text: "document.getElementById('id')", correct: true },
      { text: "document.querySelector('id')", correct: false },
    ],
  },
  {
    question: "Comment afficher une modal dans le navigateur ❓",
    response: [
      { text: "modal('je suis une modal')", correct: false },
      { text: "alert('je suis une modal')", correct: true },
      { text: "Alert('je suis une modal')", correct: false },
      { text: "alert(je suis une modal)", correct: false },
    ],
  },
  {
    question: "Comment afficher une modal de comfirmation ❓",
    response: [
      { text: "confirm.log('Confimer ici')", correct: false },
      { text: "confirm('Confimer ici')", correct: true },
      { text: "ok('Confimer ici')", correct: false },
      { text: "confirm(Confimer ici)", correct: false },
    ],
  },
];
