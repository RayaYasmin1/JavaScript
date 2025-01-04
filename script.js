document.addEventListener('DOMContentLoaded', () => {
    // Welcome message
    const header = document.querySelector('header h1');
    header.textContent = "Welcome, Rayas! Explore Your JavaScript Journey";

    // Research questions
    const researchQuestions = [
        "Is there a correlation between the distance to the nearest landmark and hotel ratings in Bangalore?",
        "Is there a correlation between the price of hotels and their star ratings in Bangalore?",
        "Is there a difference in the mean of hotel price among star ratings in Bangalore?",
        "Is there a difference in the proportion of hotels rated as 'Excellent' between urban vs. suburban locations in Bangalore?"
    ];

    const button = document.getElementById('generateQuestion');
    const output = document.getElementById('researchOutput');

    button.addEventListener('click', () => {
        const randomQuestion = researchQuestions[Math.floor(Math.random() * researchQuestions.length)];
        output.textContent = randomQuestion;
    });
});
