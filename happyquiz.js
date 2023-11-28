let question = document.getElementById('question')
let reponse = document.getElementById('reponse')
let conteneur = document.getElementById('conteneur')

let tabq = ["Which of these movies was your favorite?",
    "What genre is typically your favorite?",
    "What's for dinner?",
    "Which character trait is your favorite?",
    "Pick a female series character.",
    "Which of these do you value most ?",
    "Pick a music artist.",
    "Pick a thinking spot."]

let tabr = [{ a: "Harry Potter and the Prisoner of Azkaban (2004)", b: "Fight Club (1999)", c: "Interstellar (2014)", d: "Titanic (1997)", e: "Spider-Man: Into the Spider-Verse (2018)" },
{ a: "Action", b: "Romance", c: "Comedy", d: "Science-fiction", e: "Horror" },
{ a: "Pasta" },
{ a: "Intelligent", b: "Mysterious", c: "Passionate", d: "Strong", e: "Adventurous" },
{ a: "Cersei Lannister - Game of Thrones", b: "Eve Polastri - Killing Eve", c: "Annalise Keating - How to Get Away with Murder", d: "Eleven - Stranger Things", e: "Rue Bennett - Euphoria" },
{ a: "Integrity", b: "Wisdom", c: "Freedom", d: "Community", e: "Money" },
{ a: " Damso", b: " Beyoncé", c: " The Weeknd", d: " Drake", e: " Aya Nakamura" },
{ a: "", b: "", c: "", d: "", e: "" }]

function posequestion1() {
    afficheresultat.innerHTML = ""
    question.innerHTML = `<h1>${tabq[0]}</h1>`
    reponse.innerHTML =
        `<button class="button" onclick="posequestion2(); addSF()"><img height=120 src="image/harryPotter.gif"><br><b>${tabr[0].a}</b></button>
<button class="button" onclick="posequestion2(); addComedy()"><img height=120 src="image/fightClub.gif"><br><b>${tabr[0].b}</b></button>
<button class="button" onclick="posequestion2(); addHorror()"><img height=120 src="image/interstellar.gif"><br><b>${tabr[0].c}</b></button>
<button class="button" onclick="posequestion2(); addRomance()"><img height=120 src="image/titanic.gif"><br><b>${tabr[0].d}</b></button>
<button class="button" onclick="posequestion2(); addAction()"><img height=120 src="image/spiderman.gif"><br><b>${tabr[0].e}</b></button>`

}
function posequestion2() {
    question.innerHTML = `<h1>${tabq[1]}</h1>`
    reponse.innerHTML =
        `<button class="button" onclick="posequestion4(); addAction()"><img height=140 src="image/action.gif"><br><b>${tabr[1].a}</b></button>
<button class="button" onclick="posequestion4(); addRomance()"><img height=140 src="image/loveStory.gif"><br><b>${tabr[1].b}</b></button>
<button class="button" onclick="posequestion4(); addComedy()"><img height=140 src="image/comedy.gif"><br><b>${tabr[1].c}</b></button>
<button class="button" onclick="posequestion4(); addSF()"><img height=140 src="image/sciFi.gif"><br><b>${tabr[1].d}</b></button>
<button class="button" onclick="posequestion4(); addHorror()"><img height=140 src="image/horror.gif"><br><b>${tabr[1].e}</b></button>`
}

function posequestion4() {
    question.innerHTML = `<h1>${tabq[3]}</h1>`
    reponse.innerHTML =
        `<button class="button" onclick="posequestion5(); addHorror()"><img height=130 src="image/intelligent.webp"><br><b>${tabr[3].a}</b></button>
<button class="button" onclick="posequestion5(); addRomance()"><img height=130 src="image/mysterious.webp"><br><b>${tabr[3].b}</b></button>
<button class="button" onclick="posequestion5(); addComedy()"><img height=130 src="image/passionate.gif"><br><b>${tabr[3].c}</b></button>
<button class="button" onclick="posequestion5(); addAction()"><img height=130 src="image/strong.gif"><br><b>${tabr[3].d}</b></button>
<button class="button" onclick="posequestion5(); addSF()"><img height=130 src="image/adventurous.gif"><br><b>${tabr[3].e}</b></button>`
}

function posequestion5() {
    question.innerHTML = `<h1>${tabq[4]}</h1>`
    reponse.innerHTML =
        `<button class="button" onclick="posequestion6(); addHorror()"><img height=125 src="image/cersei-lannister-game-of-thrones.gif"><br><b>${tabr[4].a}</b></button>
<button class="button" onclick="posequestion6(); addAction()"><img height=125 src="image/eve polastri.gif"><br><b>${tabr[4].b}</b></button>
<button class="button" onclick="posequestion6(); addComedy()"><img height=125 src="image/annalise keating.gif"><br><b>${tabr[4].c}</b></button>
<button class="button" onclick="posequestion6(); addSF"><img height=125 src="image/eleven.gif"><br><b>${tabr[4].d}</b></button>
<button class="button" onclick="posequestion6(); addRomance()"><img height=125 src="image/rue.gif"><br><b>${tabr[4].e}</b></button>`
}

function posequestion6() {
    question.innerHTML = `<h1>${tabq[5]}</h1>`
    reponse.innerHTML =
        `<button class="button" onclick="posequestion7(); addAction()"><img height=150 src="image/integrity.webp"><br><b>${tabr[5].a}</b></button>
<button class="button" onclick="posequestion7(); addComedy()"><img height=150 src="image/wisdom.gif"><br><b>${tabr[5].b}</b></button>
<button class="button" onclick="posequestion7(); addSF()"><img height=150 src="image/freedom.gif"><br><b>${tabr[5].c}</b></button>
<button class="button" onclick="posequestion7(); addRomance()"><img height=150 src="image/community.gif"><br><b>${tabr[5].d}</b></button>
<button class="button" onclick="posequestion7(); addHorror()"><img height=150 src="image/money.gif"><br><b>${tabr[5].e}</b></button>`
}

function posequestion7() {
    question.innerHTML = `<h1>${tabq[6]}</h1>`
    reponse.innerHTML =
        `<button class="button" onclick="posequestion8(); addSF()"><img height=140 src="image/damso.gif"><br>${tabr[6].a}</button>
<button class="button" onclick="posequestion8(); addAction()"><img height=140 src="image/beyoncé.webp"><br>${tabr[6].b}</button>
<button class="button" onclick="posequestion8(); addHorror()"><img height=140 src="image/the weeknd.webp"><br>${tabr[6].c}</button>
<button class="button" onclick="posequestion8(); addComedy()"><img height=140 src="image/drake.gif"><br>${tabr[6].d}</button>
<button class="button" onclick="posequestion8(); addRomance()"><img height=140 src="image/aya.gif"><br>${tabr[6].e}</button>`
}

function posequestion8() {
    question.innerHTML = `<h1>${tabq[7]}</h1>`
    reponse.innerHTML =
        `<button onclick="resultat(); addHorror"><img width="200" height="400" style="border:1px solid" src="pictures/post.png">${tabr[7].a}</button>
<button onclick="resultat(); addRomance()"><img width="200" height="400" style="border:1px solid" src="pictures/pink.png">${tabr[7].b}</button>
<button onclick="resultat(); addAction()"><img width="200" height="400" style="border:1px solid" src="pictures/beach.png">${tabr[7].c}</button>
<button onclick="resultat(); addSF()"><img width="200" height="400" style="border:1px solid" src="pictures/space.jpg">${tabr[7].d}</button>
<button onclick="resultat(); addComedy()"><img width="200" height="400" style="border:1px solid" src="pictures/city.png">${tabr[7].e}</button>`
}


let compteurAction = 0;
let compteurRomance = 0;
let compteurComedy = 0;
let compteurSF = 0;
let compteurHorror = 0;

const addAction = () => {
    compteurAction += 5
    console.log(compteurAction)
    return compteurAction
}

const addRomance = () => {
    compteurRomance += 5
    console.log(compteurRomance)
    return compteurRomance
}

const addComedy = () => {
    compteurComedy += 5
    console.log(compteurComedy)
    return compteurComedy
}

const addSF = () => {
    compteurSF += 5
    console.log(compteurSF)
    return compteurSF
}

const addHorror = () => {

    compteurHorror += 5
    console.log(compteurHorror)
    return compteurHorror
}
let result = 0
function resultat() {
    document.getElementById('buttontest').style.display = 'block'
    question.innerHTML = ""
    reponse.innerHTML = ""
    if (compteurAction > compteurComedy &&
        compteurAction > compteurHorror &&
        compteurAction > compteurRomance &&
        compteurAction > compteurSF) {
        return result = 1

    } else if (compteurRomance > compteurAction &&
        compteurRomance > compteurComedy &&
        compteurRomance > compteurHorror &&
        compteurRomance > compteurSF) {
        return result = 22

    } else if (compteurComedy > compteurAction &&
        compteurComedy > compteurHorror &&
        compteurComedy > compteurSF &&
        compteurComedy > compteurHorror) {
        return result = 4

    } else if (compteurSF > compteurAction &&
        compteurSF > compteurRomance &&
        compteurSF > compteurComedy &&
        compteurSF > compteurHorror) {
        return result = 24

    } else if (compteurHorror > compteurAction &&
        compteurHorror > compteurRomance &&
        compteurHorror > compteurComedy &&
        compteurHorror > compteurSF) {
        return result = 14
    }
    /** à tirer de l'api pour le résultat :
     * - images
     * - titres
     * - episodes
     * - duration
     * - rating
     * - score
     * - synopsis
     * - year
     */
}


const afficheresultat = document.getElementById('resultat')
buttontest.addEventListener('click', async (e) => {
    // prevent default form behaviour
    e.preventDefault()

    try {
        document.getElementById('buttontest').style.display = 'none'
        document.getElementById('start').style.display = 'block'
        const res = await fetch(`https://api.jikan.moe/v4/anime?genres=${result}&order_by=popularity&type=tv&status=complete&sort=asc`);
        const data = await res.json();
        console.log(data)
        for (i = 0; i < 6; i++) {
            afficheresultat.innerHTML += `<br><br>` + data.data[i].title + `<br><br>`
            afficheresultat.innerHTML += `<img src="${data.data[i].images.jpg.image_url}"><br><br>`
            afficheresultat.innerHTML += data.data[i].synopsis + `<br><br>`
            afficheresultat.innerHTML += `<u>Number of episodes :</u> ` + data.data[i].episodes + `<br><br>`
            afficheresultat.innerHTML += `<u>Duration:</u> ` + data.data[i].duration + `<br><br>`
            afficheresultat.innerHTML += `<u>Year :</u> ` + data.data[i].year + `<br><br>`
            afficheresultat.innerHTML += `<u>Score :</u> ` + data.data[i].score + `<br><br><br>`
        }
    } catch (err) {
        console.log(err);
        topp.innerHTML = `<p>${err}</p>`;
    }
})