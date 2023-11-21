// JavaScript code can be added here for interactivity or dynamic content.
const animeEl = document.getElementById("anime-list");
const searchEl = document.getElementById("search-input");
const formEl = document.getElementById("form");

formEl.addEventListener('submit', async (e) => {
    // prevent default form behaviour
    e.preventDefault()

    let searchString = searchEl.value;

    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${searchString}`);
        const data = await res.json();
        console.log(data)

        const truncatedSynopsis = truncateText(data.data[0].synopsis, 300);
        data.data.synopsis = truncatedSynopsis;
        const animeCardHTML = generateAnimeCard(data);
        animeEl.innerHTML = animeCardHTML;
    } catch (err) {
        console.log(err);
        animeEl.innerHTML = `<p>${err}</p>`;
    }
})

function generateAnimeCard(data) {
    return `
      <div class="anime-card">
        <div class="anime-image">
        <img src="${data.data[0].images.jpg.large_image_url}" class="anime-img">
        </div>
        <div class="anime-details">
        <h3 class="anime-title">${data.data[0].title}</h3>
        <span class="anime-type">${data.data[0].type}</span>
        <p class="anime-description">${data.data[0].synopsis}</p>
        <p class="anime-rating">${data.data[0].rating}</p>
        <p class="anime-year">${data.data[0].year}</p>
        </div>
      </div>
    `;
}

//truncate function
function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
    }
    return text;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    { question: "Which of these movies was your favorite?", answers: { a: "Harry Potter and the Philosopher's Stone (2001)", b: "Fight Club (1999)", c: "Interstellar (2014)", d: "Titanic (1997)", e: "Spider-Man (2002)" } },
    { question: "What genre is typically your favorite?", answers: { a: "Action", b: "Romance", c: "Comedy", d: "Science-fiction", e: "Horror" } },
    { question: "What's your sexual orientation?", answers: { a: "Bisexual/Pansexual", b: "Heterosexual", c: "Lesbian", d: "Gay", e: "Asexual" } },
    { question: "What character trait is your favorite?", answers: { a: "Intelligent", b: "Mysterious", c: "Passionate", d: "Strong", e: "Adventurous" } },
    { question: "Pick a female series character.", answers: { a: "Cersei Lannister - Game of Thrones", b: "Eve Polastri - Killing Eve", c: "Annalise Keating - How to Get Away with Murder", d: "Eleven - Stranger Things", e: "Rue Bennett - Euphoria" } },
    { question: "Which of these do you value most ?", answers: { a: "Integrity", b: "Wisdom", c: "Freedom", d: "Community", e: "Money" } },
    { question: "Pick a thinking spot" },
    { question: "Pick a music artist.", answers: { a: "Damso", b: "Beyoncé", c: "The Weeknd", d: "Drake", e: "Aya Nakamura" } }
];


const buildQuiz = () => {
    const output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
        answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(`<label> <input type="radio" name="question${questionNumber}" value="${letter}"> ${letter} : ${currentQuestion.answers[letter]} </label>`);
        }
        output.push(`<div class="question"> ${currentQuestion.question} </div> <div class="answers"> ${answers.join('')} </div>`);
    });
    quizContainer.innerHTML = output.join('');
};

const showResults = () => { // display quiz right away

}
buildQuiz(); // on submit, show results

submitButton.addEventListener('click', showResults);
