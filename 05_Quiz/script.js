document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];
  //keep track
  let currentQuestionIndex = 0;
  let score = 0;
  //make note of it
  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
      showQuestion()
    } else {
      showResult()
    }
  });
  restartBtn.addEventListener('click', () => {
    let currentQuestionIndex = 0;
    let score = 0;
    resultContainer.classList.add('hidden')
    startQuiz()
  })

  function startQuiz() {

    startBtn.classList.add('hidden')
    resultContainer.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    showQuestion();
  }
  function showQuestion() {
    nextBtn.classList.add('hidden')
    questionText.innerText = questions[currentQuestionIndex].question
    choicesList.innerHTML = ''
    questions[currentQuestionIndex].choices.forEach(e => {
      const li = document.createElement('li')
      li.innerText = e;
      choicesList.appendChild(li)
      li.addEventListener('click', () => selectAnswer(e))
    });
  }
  function selectAnswer(e) {
    const correctAnswer = questions[currentQuestionIndex].answer
    if (e === correctAnswer) {
      score++
    }
    nextBtn.classList.remove('hidden')
  }
  function showResult() {
    questionContainer.classList.add('hidden')
    resultContainer.classList.remove('hidden')
    scoreDisplay.textContent = `${score} out of ${questions.length}`
  }
})