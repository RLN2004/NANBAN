const quizData = [
    {
        section: "Anxiety Assessment",
        questions: [
            {
                question: "How often do you feel nervous or worried?",
                options: [
                    { text: "Not at all", points: 0 },
                    { text: "Sometimes", points: 1 },
                    { text: "Often", points: 2 },
                    { text: "Almost every day", points: 3 }
                ]
            },
            {
                question: "How often do you find it hard to relax?",
                options: [
                    { text: "Not at all", points: 0 },
                    { text: "Sometimes", points: 1 },
                    { text: "Often", points: 2 },
                    { text: "Almost every day", points: 3 }
                ]
            },
            {
                question: "How often do you worry about many things at once?",
                options: [
                    { text: "Not at all", points: 0 },
                    { text: "Sometimes", points: 1 },
                    { text: "Often", points: 2 },
                    { text: "Almost every day", points: 3 }
                ]
            },
            {
                question: "How often do you feel restless, like you can’t sit still?",
                options: [
                    { text: "Not at all", points: 0 },
                    { text: "Sometimes", points: 1 },
                    { text: "Often", points: 2 },
                    { text: "Almost every day", points: 3 }
                ]
            },
            {
                question: "How often do you feel irritated or easily upset?",
                options: [
                    { text: "Not at all", points: 0 },
                    { text: "Sometimes", points: 1 },
                    { text: "Often", points: 2 },
                    { text: "Almost every day", points: 3 }
                ]
            }
        ]
    },
    {
        section: "Stress Assessment",
        questions: [
            {
                question: "How often do you feel like you have too much to do?",
                options: [
                    { text: "Never", points: 0 },
                    { text: "Rarely", points: 1 },
                    { text: "Sometimes", points: 2 },
                    { text: "Often", points: 3 },
                    { text: "All the time", points: 4 }
                ]
            },
            {
                question: "How often do you feel like things are out of your control?",
                options: [
                    { text: "Never", points: 0 },
                    { text: "Rarely", points: 1 },
                    { text: "Sometimes", points: 2 },
                    { text: "Often", points: 3 },
                    { text: "All the time", points: 4 }
                ]
            },
            {
                question: "How often do you feel stressed or tense?",
                options: [
                    { text: "Never", points: 0 },
                    { text: "Rarely", points: 1 },
                    { text: "Sometimes", points: 2 },
                    { text: "Often", points: 3 },
                    { text: "All the time", points: 4 }
                ]
            },
            {
                question: "How often do you feel like you can’t handle everything?",
                options: [
                    { text: "Never", points: 0 },
                    { text: "Rarely", points: 1 },
                    { text: "Sometimes", points: 2 },
                    { text: "Often", points: 3 },
                    { text: "All the time", points: 4 }
                ]
            },
            {
                question: "How often do you get upset easily?",
                options: [
                    { text: "Never", points: 0 },
                    { text: "Rarely", points: 1 },
                    { text: "Sometimes", points: 2 },
                    { text: "Often", points: 3 },
                    { text: "All the time", points: 4 }
                ]
            }
        ]
    },
    {
        section: "Depression Assessment",
        questions: [
            {
                question: "How often do you feel like you’re not interested in things you used to enjoy?",
                options: [
                    { text: "Not at all", points: 0 },
                    { text: "Sometimes", points: 1 },
                    { text: "Often", points: 2 },
                    { text: "Almost every day", points: 3 }
                ]
            },
            {
                question: "How often do you feel sad or hopeless?",
                options: [
                    { text: "Not at all", points: 0 },
                    { text: "Sometimes", points: 1 },
                    { text: "Often", points: 2 },
                    { text: "Almost every day", points: 3 }
                ]
            },
            {
                question: "How often do you feel tired, even when you haven’t done much?",
                options: [
                    { text: "Not at all", points: 0 },
                    { text: "Sometimes", points: 1 },
                    { text: "Often", points: 2 },
                    { text: "Almost every day", points: 3 }
                ]
            },
            {
                question: "How often do you find it hard to focus on things like reading or watching TV?",
                options: [
                    { text: "Not at all", points: 0 },
                    { text: "Sometimes", points: 1 },
                    { text: "Often", points: 2 },
                    { text: "Almost every day", points: 3 }
                ]
            },
            {
                question: "How often do you feel bad about yourself or feel like you’re not good enough?",
                options: [
                    { text: "Not at all", points: 0 },
                    { text: "Sometimes", points: 1 },
                    { text: "Often", points: 2 },
                    { text: "Almost every day", points: 3 }
                ]
            }
        ]
    }
];



let currentQuestionIndex = 0;
let totalPoints = [0, 0, 0]; // Array to store points for Anxiety, Stress, and Depression

function loadQuestion() {
    const quizSection = document.getElementById('quiz-section');
    quizSection.innerHTML = ''; // Clear previous question

    let sectionIndex = 0;
    let questionIndex = currentQuestionIndex;

    if (currentQuestionIndex >= 5 && currentQuestionIndex < 10) {
        sectionIndex = 1; // Stress Assessment
        questionIndex = currentQuestionIndex - 5;
    } else if (currentQuestionIndex >= 10) {
        sectionIndex = 2; // Depression Assessment
        questionIndex = currentQuestionIndex - 10;
    }

    if (currentQuestionIndex < 15) {
        const currentQuestion = quizData[sectionIndex].questions[questionIndex];
        
        // Create question element
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerText = currentQuestion.question;
        quizSection.appendChild(questionElement);
        
        // Create options
        const optionsElement = document.createElement('div');
        optionsElement.className = 'options';
        currentQuestion.options.forEach((option) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'option';
            input.value = option.points;
            label.appendChild(input);
            label.append(option.text);
            optionsElement.appendChild(label);
        });
        quizSection.appendChild(optionsElement);
    } else {
        displayResult();
    }
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        const sectionIndex = Math.floor(currentQuestionIndex / 5); // Determine the current section index
        totalPoints[sectionIndex] += parseInt(selectedOption.value);
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Please select an answer.");
    }
}

function displayResult() {
    const resultSection = document.getElementById('result');
    const quizSection = document.getElementById('quiz-section');
    const nextButton = document.getElementById('next-question');
    quizSection.classList.add('hidden');
    nextButton.classList.add('hidden');
    
    // Display progress bars
    const progressBars = document.getElementById('progress-bars');
    progressBars.innerHTML = ''; // Clear previous bars

    const maxPoints = [15, 20, 15]; // Max points for each section
    
    quizData.forEach((section, index) => {
        const barContainer = document.createElement('div');
        barContainer.className = 'progress-bar-container';

        const label = document.createElement('div');
        label.className = 'progress-label';
        label.innerText = section.section;
        barContainer.appendChild(label);

        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.width = `${(totalPoints[index] / maxPoints[index]) * 100}%`;
        progressBar.innerText = `${totalPoints[index]} / ${maxPoints[index]}`;
        barContainer.appendChild(progressBar);

        progressBars.appendChild(barContainer);
    });

    resultSection.classList.remove('hidden');
}

function startQuiz() {
    currentQuestionIndex = 0;
    totalPoints = [0, 0, 0]; // Reset points for all sections
    document.getElementById('result').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    document.getElementById('next-question').classList.remove('hidden');
    loadQuestion();
}

window.onload = startQuiz;