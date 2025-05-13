let startQuizBtn = document.querySelector(".start-quiz");
let titleElement = document.querySelector(".title");
let instructionCont = document.querySelector(".instruction-container");
let questionElement = document.querySelector(".question");
let questionTextElement = document.querySelector(".question-text");
let quizContainer = document.querySelector(".quiz-questions-ans-container");
let optionsContainer = document.querySelector(".options-container");
let nextBtn = document.querySelector(".next-button");
let score = 0;
let scoreElement = document.querySelector(".score");
let timer = 60;
let timerElement = document.querySelector(".timer");

let resultContainer = document.querySelector(".result-container");
let finalScoreElement = document.querySelector(".final-score");
let attendQuesElement = document.querySelector(".attend-ques");
let skippedQuesElement = document.querySelector(".skipped-ques");
let correctQuesElement = document.querySelector(".correct-ques");
let wrongQuesElement = document.querySelector(".wrong-ques");
let tryAgainBtn = document.querySelector(".try-again");

tryAgainBtn.addEventListener("click", () => {
    location.reload();
});

let questionAndAnswer = [
    {
        question: "Which continent is the Sahara Desert located in?",
        answers: [
            { text: "A. Asia", correct: false },
            { text: "B. Africa", correct: true },
            { text: "C. Australia", correct: false },
            { text: "D. South America", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "A. Kyoto", correct: false },
            { text: "B. Tokyo", correct: true },
            { text: "C. Osaka", correct: false },
            { text: "D. Hiroshima", correct: false }
        ]
    },
    {
        question: "Which game series includes the character 'Link'?",
        answers: [
            { text: "A. Final Fantasy", correct: false },
            { text: "B. The Legend of Zelda", correct: true },
            { text: "C. Metroid", correct: false },
            { text: "D. Fire Emblem", correct: false }
        ]
    },
    {
        question: "How many players are on a basketball team on the court?",
        answers: [
            { text: "A. 6", correct: false },
            { text: "B. 5", correct: true },
            { text: "C. 7", correct: false },
            { text: "D. 4", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "A. 0", correct: false },
            { text: "B. 1", correct: false },
            { text: "C. 2", correct: true },
            { text: "D. 3", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "A. Vincent van Gogh", correct: false },
            { text: "B. Pablo Picasso", correct: false },
            { text: "C. Leonardo da Vinci", correct: true },
            { text: "D. Michelangelo", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "A. China", correct: false },
            { text: "B. South Korea", correct: false },
            { text: "C. Japan", correct: true },
            { text: "D. Thailand", correct: false }
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "A. Amazon", correct: false },
            { text: "B. Nile", correct: true },
            { text: "C. Yangtze", correct: false },
            { text: "D. Mississippi", correct: false }
        ]
    },
    {
        question: "Which company created the iPhone?",
        answers: [
            { text: "A. Samsung", correct: false },
            { text: "B. Google", correct: false },
            { text: "C. Apple", correct: true },
            { text: "D. Microsoft", correct: false }
        ]
    },
    {
        question: "Who is known as the father of computers?",
        answers: [
            { text: "A. Alan Turing", correct: false },
            { text: "B. Bill Gates", correct: false },
            { text: "C. Charles Babbage", correct: true },
            { text: "D. Steve Jobs", correct: false }
        ]
    },
    {
        question: "In which sport would you perform a slam dunk?",
        answers: [
            { text: "A. Tennis", correct: false },
            { text: "B. Football", correct: false },
            { text: "C. Basketball", correct: true },
            { text: "D. Volleyball", correct: false }
        ]
    },
    {
        question: "Which country has the most population?",
        answers: [
            { text: "A. USA", correct: false },
            { text: "B. India", correct: true },
            { text: "C. Russia", correct: false },
            { text: "D. China", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in sushi?",
        answers: [
            { text: "A. Bread", correct: false },
            { text: "B. Noodles", correct: false },
            { text: "C. Rice", correct: true },
            { text: "D. Tofu", correct: false }
        ]
    },
    {
        question: "Who sang 'Shape of You'?",
        answers: [
            { text: "A. Justin Bieber", correct: false },
            { text: "B. Shawn Mendes", correct: false },
            { text: "C. Ed Sheeran", correct: true },
            { text: "D. Bruno Mars", correct: false }
        ]
    },
    {
        question: "Which country hosted the 2020 Summer Olympics (held in 2021)?",
        answers: [
            { text: "A. China", correct: false },
            { text: "B. Japan", correct: true },
            { text: "C. Brazil", correct: false },
            { text: "D. UK", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "A. Oxygen", correct: false },
            { text: "B. Nitrogen", correct: false },
            { text: "C. Carbon Dioxide", correct: true },
            { text: "D. Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answers: [
            { text: "A. 90°C", correct: false },
            { text: "B. 100°C", correct: true },
            { text: "C. 110°C", correct: false },
            { text: "D. 120°C", correct: false }
        ]
    },
    {
        question: "Who was the first President of the United States?",
        answers: [
            { text: "A. Abraham Lincoln", correct: false },
            { text: "B. George Washington", correct: true },
            { text: "C. John Adams", correct: false },
            { text: "D. Thomas Jefferson", correct: false }
        ]
    },
    {
        question: "What is the name of Thor's hammer?",
        answers: [
            { text: "A. Stormbreaker", correct: false },
            { text: "B. Mjolnir", correct: true },
            { text: "C. Excalibur", correct: false },
            { text: "D. Gungnir", correct: false }
        ]
    },
    {
        question: "Which planet has the most moons?",
        answers: [
            { text: "A. Jupiter", correct: false },
            { text: "B. Saturn", correct: true },
            { text: "C. Mars", correct: false },
            { text: "D. Neptune", correct: false }
        ]
    },
    {
        question: "Who won the Cricket World Cup in 2019?",
        answers: [
            { text: "A. India", correct: false },
            { text: "B. Australia", correct: false },
            { text: "C. England", correct: true },
            { text: "D. New Zealand", correct: false }
        ]
    },
    {
        question: "What is the capital city of Canada?",
        answers: [
            { text: "A. Toronto", correct: false },
            { text: "B. Ottawa", correct: true },
            { text: "C. Vancouver", correct: false },
            { text: "D. Montreal", correct: false }
        ]
    },
    {
        question: "Which video game features the character Master Chief?",
        answers: [
            { text: "A. Call of Duty", correct: false },
            { text: "B. Gears of War", correct: false },
            { text: "C. Halo", correct: true },
            { text: "D. Destiny", correct: false }
        ]
    },
    {
        question: "Who directed the movie 'Inception'?",
        answers: [
            { text: "A. Quentin Tarantino", correct: false },
            { text: "B. James Cameron", correct: false },
            { text: "C. Christopher Nolan", correct: true },
            { text: "D. Steven Spielberg", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "A. Mars", correct: true },
            { text: "B. Venus", correct: false },
            { text: "C. Jupiter", correct: false },
            { text: "D. Saturn", correct: false }
        ]
    },
    {
        question: "In which year did India gain independence?",
        answers: [
            { text: "A. 1945", correct: false },
            { text: "B. 1947", correct: true },
            { text: "C. 1950", correct: false },
            { text: "D. 1930", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "A. Elephant", correct: false },
            { text: "B. Blue Whale", correct: true },
            { text: "C. Giraffe", correct: false },
            { text: "D. Polar Bear", correct: false }
        ]
    },
    {
        question: "Which sport is known as the 'king of sports'?",
        answers: [
            { text: "A. Cricket", correct: false },
            { text: "B. Football (Soccer)", correct: true },
            { text: "C. Basketball", correct: false },
            { text: "D. Baseball", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "A. Gd", correct: false },
            { text: "B. Au", correct: true },
            { text: "C. Ag", correct: false },
            { text: "D. Go", correct: false }
        ]
    },
    {
        question: "Who wrote the Harry Potter book series?",
        answers: [
            { text: "A. J.K. Rowling", correct: true },
            { text: "B. Stephen King", correct: false },
            { text: "C. Suzanne Collins", correct: false },
            { text: "D. George R.R. Martin", correct: false }
        ]
    },
    {
        question: "Which instrument has keys, pedals, and strings?",
        answers: [
            { text: "A. Guitar", correct: false },
            { text: "B. Piano", correct: true },
            { text: "C. Violin", correct: false },
            { text: "D. Trumpet", correct: false }
        ]
    },
    {
        question: "What is the name of the fictional wizarding school in Harry Potter?",
        answers: [
            { text: "A. Durmstrang", correct: false },
            { text: "B. Beauxbatons", correct: false },
            { text: "C. Hogwarts", correct: true },
            { text: "D. Ilvermorny", correct: false }
        ]
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        answers: [
            { text: "A. Tiger", correct: false },
            { text: "B. Lion", correct: true },
            { text: "C. Leopard", correct: false },
            { text: "D. Panther", correct: false }
        ]
    },
    {
        question: "What is the square root of 64?",
        answers: [
            { text: "A. 6", correct: false },
            { text: "B. 8", correct: true },
            { text: "C. 7", correct: false },
            { text: "D. 9", correct: false }
        ]
    },
    {
        question: "Which metal is liquid at room temperature?",
        answers: [
            { text: "A. Gold", correct: false },
            { text: "B. Mercury", correct: true },
            { text: "C. Iron", correct: false },
            { text: "D. Zinc", correct: false }
        ]
    },
    {
        question: "Which festival is known as the Festival of Lights?",
        answers: [
            { text: "A. Eid", correct: false },
            { text: "B. Christmas", correct: false },
            { text: "C. Diwali", correct: true },
            { text: "D. Holi", correct: false }
        ]
    },
    {
        question: "Who is the CEO of Tesla (as of 2024)?",
        answers: [
            { text: "A. Jeff Bezos", correct: false },
            { text: "B. Elon Musk", correct: true },
            { text: "C. Sundar Pichai", correct: false },
            { text: "D. Tim Cook", correct: false }
        ]
    },
    {
        question: "What does 'www' stand for in a website browser?",
        answers: [
            { text: "A. World Wireless Web", correct: false },
            { text: "B. Wide Web World", correct: false },
            { text: "C. World Wide Web", correct: true },
            { text: "D. Web World Wide", correct: false }
        ]
    },
    {
        question: "How many continents are there?",
        answers: [
            { text: "A. 5", correct: false },
            { text: "B. 6", correct: false },
            { text: "C. 7", correct: true },
            { text: "D. 8", correct: false }
        ]
    },
    {
        question: "Which element has the atomic number 1?",
        answers: [
            { text: "A. Helium", correct: false },
            { text: "B. Oxygen", correct: false },
            { text: "C. Hydrogen", correct: true },
            { text: "D. Nitrogen", correct: false }
        ]
    },
    {
        question: "Which social media platform is owned by Meta?",
        answers: [
            { text: "A. Twitter", correct: false },
            { text: "B. TikTok", correct: false },
            { text: "C. Facebook", correct: true },
            { text: "D. Snapchat", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "A. Yuan", correct: false },
            { text: "B. Yen", correct: true },
            { text: "C. Won", correct: false },
            { text: "D. Dollar", correct: false }
        ]
    },
    {
        question: "Which bird is known for its colorful tail and loud calls?",
        answers: [
            { text: "A. Crow", correct: false },
            { text: "B. Sparrow", correct: false },
            { text: "C. Peacock", correct: true },
            { text: "D. Parrot", correct: false }
        ]
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: [
            { text: "A. Venus", correct: false },
            { text: "B. Mercury", correct: true },
            { text: "C. Earth", correct: false },
            { text: "D. Mars", correct: false }
        ]
    },
    {
        question: "Which Disney movie features a snowman named Olaf?",
        answers: [
            { text: "A. Moana", correct: false },
            { text: "B. Tangled", correct: false },
            { text: "C. Frozen", correct: true },
            { text: "D. Brave", correct: false }
        ]
    },
    {
        question: "Which country is famous for pizza and pasta?",
        answers: [
            { text: "A. Spain", correct: false },
            { text: "B. France", correct: false },
            { text: "C. Italy", correct: true },
            { text: "D. Greece", correct: false }
        ]
    },
    {
        question: "Which ocean is the largest?",
        answers: [
            { text: "A. Atlantic", correct: false },
            { text: "B. Indian", correct: false },
            { text: "C. Arctic", correct: false },
            { text: "D. Pacific", correct: true }
        ]
    },
    {
        question: "What is the main language spoken in Brazil?",
        answers: [
            { text: "A. Spanish", correct: false },
            { text: "B. English", correct: false },
            { text: "C. Portuguese", correct: true },
            { text: "D. French", correct: false }
        ]
    },
    {
        question: "Which superhero is known as the 'Caped Crusader'?",
        answers: [
            { text: "A. Superman", correct: false },
            { text: "B. Batman", correct: true },
            { text: "C. Iron Man", correct: false },
            { text: "D. Spider-Man", correct: false }
        ]
    },
    {
        question: "Who discovered gravity by watching a falling apple?",
        answers: [
            { text: "A. Galileo", correct: false },
            { text: "B. Newton", correct: true },
            { text: "C. Kepler", correct: false },
            { text: "D. Tesla", correct: false }
        ]
    },
    {
        question: "Which fruit is known to keep the doctor away?",
        answers: [
            { text: "A. Banana", correct: false },
            { text: "B. Orange", correct: false },
            { text: "C. Apple", correct: true },
            { text: "D. Mango", correct: false }
        ]
    },
    {
        question: "What is the national animal of India?",
        answers: [
            { text: "A. Lion", correct: false },
            { text: "B. Elephant", correct: false },
            { text: "C. Tiger", correct: true },
            { text: "D. Peacock", correct: false }
        ]
    },
    {
        question: "In which year did World War II end?",
        answers: [
            { text: "A. 1943", correct: false },
            { text: "B. 1944", correct: false },
            { text: "C. 1945", correct: true },
            { text: "D. 1946", correct: false }
        ]
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        answers: [
            { text: "A. Isaac Newton", correct: false },
            { text: "B. Nikola Tesla", correct: false },
            { text: "C. Albert Einstein", correct: true },
            { text: "D. Galileo Galilei", correct: false }
        ]
    },
    {
        question: "Which continent is the Great Wall of China located in?",
        answers: [
            { text: "A. Africa", correct: false },
            { text: "B. Europe", correct: false },
            { text: "C. Asia", correct: true },
            { text: "D. South America", correct: false }
        ]
    },
    {
        question: "Which gas do humans need to breathe?",
        answers: [
            { text: "A. Carbon Dioxide", correct: false },
            { text: "B. Oxygen", correct: true },
            { text: "C. Nitrogen", correct: false },
            { text: "D. Helium", correct: false }
        ]
    },
    {
        question: "How many colors are there in a rainbow?",
        answers: [
            { text: "A. 5", correct: false },
            { text: "B. 6", correct: false },
            { text: "C. 7", correct: true },
            { text: "D. 8", correct: false }
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "A. K2", correct: false },
            { text: "B. Mount Kilimanjaro", correct: false },
            { text: "C. Mount Everest", correct: true },
            { text: "D. Mount Fuji", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "A. Gold", correct: false },
            { text: "B. Iron", correct: false },
            { text: "C. Diamond", correct: true },
            { text: "D. Silver", correct: false }
        ]
    }
]

function generateUniqueRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 60; i++) {
        numbers.push(i);
    }

    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; 
    }

    return numbers; 
}

const randomUnique = generateUniqueRandomNumbers();
console.log(randomUnique);

let questionIndex = 0;

let correctAns = 0;
let wrongAns = 0;
let attendQues = 0;

nextBtn.addEventListener("click", () => {
    optionsContainer.innerHTML = "";
    questionIndex++;
    startQuiz();
});

startQuiz = () => {
    questionElement.textContent = "Question " + (questionIndex + 1);
    questionTextElement.textContent = questionAndAnswer[randomUnique[questionIndex]].question;
    questionAndAnswer[randomUnique[questionIndex]].answers.forEach(answer => {
        let button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("option");
        optionsContainer.appendChild(button);
        button.addEventListener("click", () => {
            attendQues++;
            [...optionsContainer.children].forEach(btn => btn.disabled = true);
            if (answer.correct) {
                score += 5;
                button.classList.add("correct");
                correctAns++;
            } else {
                button.classList.add("incorrect");
                score--;
                let correctButton = [...optionsContainer.children].find(btn => btn.textContent === questionAndAnswer[randomUnique[questionIndex]].answers.find(ans => ans.correct).text);
                correctButton.classList.add("correct");
                wrongAns++;
            }
            scoreElement.textContent = "Score : " + score;
        });
    })
}

timerStart = () => {
    let timerInterval = setInterval(() => {
        timer--;
        timerElement.textContent = timer + "s"
        if (timer <= 10) {
            timerElement.style.color = "red";
        }
        if (timer <= 0) {
            clearInterval(timerInterval);
            quizContainer.style.display = "none";
            resultContainer.style.display = "block";
            finalScoreElement.textContent = score;
            correctQuesElement.textContent = correctAns;
            wrongQuesElement.textContent = wrongAns;
            attendQuesElement.textContent = attendQues;
            skippedQuesElement.textContent = questionIndex - attendQues;
            scoreElement.textContent = "";
            titleElement.style.display = "block";
        }
    }, 1000);
}

startQuizBtn.addEventListener("click", () => {
    instructionCont.style.display = "none";
    quizContainer.style.display = "block";
    titleElement.style.display = "none";
    scoreElement.textContent = "Score : " + score;
    startQuiz();
    timerStart();
});




