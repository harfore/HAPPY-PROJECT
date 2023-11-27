let question = document.getElementById('question')
let reponse = document.getElementById('reponse')
let conteneur = document.getElementById('conteneur')

let tabq = ["Which of these movies was your favorite?",
    "What genre is typically your favorite?",
    "What's for dinner?",
    "What character trait is your favorite?",
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
    question.innerHTML = `<h1>${tabq[0]}</h1>`
    reponse.innerHTML =
        `<button class="button" onclick="posequestion2(); addSF()"><img height=200 src="image/harryPotter.gif"><br>${tabr[0].a}</button>
<button class="button" onclick="posequestion2(); addComedy()"><img height=200 src="image/fightClub.gif"><br>${tabr[0].b}</button>
<button class="button" onclick="posequestion2(); addHorror()"><img height=200 src="image/interstellar.gif"><br>${tabr[0].c}</button>
<button class="button" onclick="posequestion2(); addRomance()"><img height=200 src="image/titanic.gif"><br>${tabr[0].d}</button>
<button class="button" onclick="posequestion2(); addAction()"><img height=200 src="image/spiderman.gif"><br>${tabr[0].e}</button>`

}
function posequestion2() {
    question.innerHTML = `<h1>${tabq[1]}</h1>`
    reponse.innerHTML =
        `<button class="button" onclick="posequestion4(); addAction()"><img height=200 src="image/action.gif"><br>${tabr[1].a}</button>
<button class="button" onclick="posequestion4(); addRomance()"><img height=200 src="image/loveStory.gif"><br>${tabr[1].b}</button>
<button class="button" onclick="posequestion4(); addComedy()"><img height=200 src="image/comedy.gif"><br>${tabr[1].c}</button>
<button class="button" onclick="posequestion4(); addSF()"><img height=200 src="image/sciFi.gif"><br>${tabr[1].d}</button>
<button class="button" onclick="posequestion4(); addHorror()"><img height=200 src="image/horror.gif"><br>${tabr[1].e}</button>`
}

function posequestion4() {
    question.innerHTML = `<h1>${tabq[3]}</h1>`
    reponse.innerHTML =
        `<button class="button" onclick="posequestion5(); addHorror()"><img height=200 src="image/intelligent.webp"><br>${tabr[3].a}</button>
<button class="button" onclick="posequestion5(); addRomance()"><img height=200 src="image/mysterious.webp"><br>${tabr[3].b}</button>
<button class="button" onclick="posequestion5(); addComedy()"><img height=200 src="image/passionate.gif"><br>${tabr[3].c}</button>
<button class="button" onclick="posequestion5(); addAction()"><img height=200 src="image/strong.gif"><br>${tabr[3].d}</button>
<button class="button" onclick="posequestion5(); addSF()"><img height=200 src="image/adventurous.gif"><br>${tabr[3].e}</button>`
}

function posequestion5() {
    question.innerHTML = `<h1>${tabq[4]}</h1>`
    reponse.innerHTML =
        `<button class="button" onclick="posequestion6(); addHorror()"><img height=200 src="image/cersei-lannister-game-of-thrones.gif"><br>${tabr[4].a}</button>
<button class="button" onclick="posequestion6(); addAction()"><img height=200 src="image/eve polastri.gif"><br>${tabr[4].b}</button>
<button class="button" onclick="posequestion6(); addComedy()"><img height=200 src="image/annalise keating.gif"><br>${tabr[4].c}</button>
<button class="button" onclick="posequestion6(); addSF"><img height=200 src="image/eleven.gif"><br>${tabr[4].d}</button>
<button class="button" onclick="posequestion6(); addRomance()"><img height=200 src="image/rue.gif"><br>${tabr[4].e}</button>`
}

function posequestion6() {
    question.innerHTML = `<h1>${tabq[5]}</h1>`
    reponse.innerHTML =
        `<button class="button" onclick="posequestion7(); addAction()"><img height=150 src="image/integrity.webp"><br>${tabr[5].a}</button>
<button class="button" onclick="posequestion7(); addComedy()"><img height=150 src="image/wisdom.gif"><br>${tabr[5].b}</button>
<button class="button" onclick="posequestion7(); addSF()"><img height=150 src="image/freedom.gif"><br>${tabr[5].c}</button>
<button class="button" onclick="posequestion7(); addRomance()"><img height=150 src="image/community.gif"><br>${tabr[5].d}</button>
<button class="button" onclick="posequestion7(); addHorror()"><img height=150 src="image/money.gif"><br>${tabr[5].e}</button>`
}

function posequestion7() {
    question.innerHTML = `<h1>${tabq[6]}</h1>`
    reponse.innerHTML =
        `<button class="button" onclick="posequestion8(); addSF()"><img height=200 src="image/damso.gif"><br>${tabr[6].a}</button>
<button class="button" onclick="posequestion8(); addAction()"><img height=200 src="image/beyoncé.webp"><br>${tabr[6].b}</button>
<button class="button" onclick="posequestion8(); addHorror()"><img height=200 src="image/the weeknd.webp"><br>${tabr[6].c}</button>
<button class="button" onclick="posequestion8(); addComedy()"><img height=200 src="image/drake.gif"><br>${tabr[6].d}</button>
<button class="button" onclick="posequestion8(); addRomance()"><img height=200 src="image/aya.gif"><br>${tabr[6].e}</button>`
}

function posequestion8() {
    question.innerHTML = `<h1>${tabq[7]}</h1>`
    reponse.innerHTML =
        `<button onclick="resultat()"><img width="200" height="400" style="border:1px solid" src="pictures/post.png">${tabr[7].a}</button>
<button onclick="resultat()"><img width="200" height="400" style="border:1px solid" src="pictures/pink.png">${tabr[7].b}</button>
<button onclick="resultat()"><img width="200" height="400" style="border:1px solid" src="pictures/beach.png">${tabr[7].c}</button>
<button onclick="resultat()"><img width="200" height="400" style="border:1px solid" src="pictures/space.jpg">${tabr[7].d}</button>
<button onclick="resultat()"><img width="200" height="400" style="border:1px solid" src="pictures/city.png">${tabr[7].e}</button>`
            `<button class="button" onclick="poequestion9(); addHorror()"><img height=100 src="image/.gif">${tabr[7].a}</button>
<button class="button" onclick="posequestion9()"><img height=100 src="image/.gif">${tabr[7].b}</button>
<button class="button" onclick="posequestion9()"><img height=100 src="image/.gif">${tabr[7].c}</button>
<button class="button" onclick="posequestion9()"><img height=100 src="image/.gif">${tabr[7].d}</button>
<button class="button" onclick="posequestion9()"><img height=100 src="image/.gif">${tabr[7].e}</button>`
}

function posequestion9() {
    question.innerHTML = `<h1>${tabq[7]}</h1>`
    reponse.innerHTML =
        `<button onclick="resultat(); addHorror()"><img height=100 src="post.png">${tabr[7].a}</button>
<button onclick="resultat()"><img height=100 src="pink.png">${tabr[7].b}</button>
<button onclick="resultat()"><img height=100 src="beach.png">${tabr[7].c}</button>
<button onclick="resultat()"><img height=100 src="space.jpg">${tabr[7].d}</button>
<button onclick="resultat()"><img height=100 src="city.png">${tabr[7].e}</button>`
}


let compteurAction = [];
let compteurRomance = [];
let compteurComedy = [];
let compteurSF = [];
let compteurHorror = [];

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

function resultat() {
    let result;
    if (compteurAction > compteurComedy &&
        compteurAction > compteurHorror &&
        compteurAction > compteurRomance &&
        compteurAction > compteurSF) {
        return result = 'action'
        /** function display_image(src, width, height, alt) {
            var a = document.createElement("img");
            a.src = src;
            a.width = width;
            a.height = height;
            a.alt = alt;
            document.body.appendChild(a);
        }
        display_image('JavaScript.jpg',
            276,
            110,
            'JavaScriptImage'); */

    } else if (compteurRomance > compteurAction &&
        compteurRomance > compteurComedy &&
        compteurRomance > compteurHorror &&
        compteurRomance > compteurSF) {
        return result = 'romance'

    } else if (compteurComedy > compteurAction &&
        compteurComedy > compteurHorror &&
        compteurComedy > compteurSF &&
        compteurComedy > compteurHorror) {
        return result = 'comedy'

    } else if (compteurSF > compteurAction &&
        compteurSF > compteurRomance &&
        compteurSF > compteurComedy &&
        compteurSF > compteurHorror) {
        return result = 'science-fiction'

    } else if (compteurHorror > compteurAction &&
        compteurHorror > compteurRomance &&
        compteurHorror > compteurComedy &&
        compteurHorror > compteurSF) {
        return result = 'horror'
    }

}


/** answers 
 * action = 1 // romance = 2 // comédie = 3 // science-fiction : 4 // horreur = 5
 * harry potter = 4
 * fight club = 3
 * interstellar = 5
 * titanic = 2
 * spider-man = 1
 * 
 * strong = 1
 * passionate = 2
 * intelligent = 3
 * adventurous = 4
 * mysterious = 5
 * 
 * cersei = 5
 * eve = 1
 * annalise = 3
 * eleven = 4
 * rue = 2
 * 
 * integrity = 1
 * wisdom = 3
 * freedom = 4
 * community = 2
 * money = 5
 * 
 * space = 4
 * post = 5
 * flowers = 2
 * city = 3
 * village = 1
 * 
 * damso = 5
 * beyoncé = 1
 * drake = 3
 * aya = 2
 * the weeknd = 4
 * 
*/