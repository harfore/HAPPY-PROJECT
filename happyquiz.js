let question = document.getElementById('question')
let reponse = document.getElementById('reponse')
let conteneur = document.getElementById('conteneur')

let tabq = ["Which of these movies was your favorite?",
"What genre is typically your favorite?",
"What's your sexual orientation?",
"What character trait is your favorite?",
"Pick a female series character.",
"Which of these do you value most ?",
"Pick a music artist.",
"Pick a thinking spot"]

let tabr = [{ a: "Harry Potter and the Philosopher's Stone (2001)", b: "Fight Club (1999)", c: "Interstellar (2014)", d: "Titanic (1997)", e: "Spider-Man: Into the Spider-Verse (2018)" },
{ a: "Action", b: "Romance", c: "Comedy", d: "Science-fiction", e: "Horror" },
{ a: "Bisexual/Pansexual", b: "Heterosexual", c: "Lesbian", d: "Gay", e: "Asexual" },
{ a: "Intelligent", b: "Mysterious", c: "Passionate", d: "Strong", e: "Adventurous" },
{ a: "Cersei Lannister - Game of Thrones", b: "Eve Polastri - Killing Eve", c: "Annalise Keating - How to Get Away with Murder", d: "Eleven - Stranger Things", e: "Rue Bennett - Euphoria" },
{ a: "Integrity", b: "Wisdom", c: "Freedom", d: "Community", e: "Money" },
{ a: "Damso", b: "Beyoncé", c:"The Weeknd", d:"Drake", e:"Aya Nakamura"},
{ a: "img", b: "img", c:"img", d:"img", e:"img"}]


function posequestion1 () {
question.innerHTML = `<h1>${tabq[0]}</h1>`
reponse.innerHTML = 
`<button onclick="posequestion2()"><img height=100 src="image/harryPotter.gif">${tabr[0].a}</button>
<button onclick="posequestion2()"><img height=100 src="image/fightClub.gif">${tabr[0].b}</button>
<button onclick="posequestion2()"><img height=100 src="image/interstellar.gif">${tabr[0].c}</button>
<button onclick="posequestion2()"><img height=100 src="image/titanic.gif">${tabr[0].d}</button>
<button onclick="posequestion2()"><img height=100 src="image/spiderman.gif">${tabr[0].e}</button>`
}

function posequestion2() {
    question.innerHTML = `<h1>${tabq[1]}</h1>`
reponse.innerHTML = 
`<button onclick="posequestion3()"><img height=100 src="image/action.gif">${tabr[1].a}</button>
<button onclick="posequestion3()"><img height=100 src="image/loveStory.gif">${tabr[1].b}</button>
<button onclick="posequestion3()"><img height=100 src="image/comedy.gif">${tabr[1].c}</button>
<button onclick="posequestion3()"><img height=100 src="image/sciFi.gif">${tabr[1].d}</button>
<button onclick="posequestion3()"><img height=100 src="image/horror.gif">${tabr[1].e}</button>`
}

function posequestion3() {
    question.innerHTML = `<h1>${tabq[2]}</h1>`
reponse.innerHTML = 
`<button onclick="posequestion4()">${tabr[2].a}</button>
<button onclick="posequestion4()">${tabr[2].b}</button>
<button onclick="posequestion4()">${tabr[2].c}</button>
<button onclick="posequestion4()">${tabr[2].d}</button>
<button onclick="posequestion4()">${tabr[2].e}</button>`
}

function posequestion4() {
    question.innerHTML = `<h1>${tabq[3]}</h1>`
reponse.innerHTML = 
`<button onclick="posequestion5()"><img height=100 src="image/.gif">${tabr[3].a}</button>
<button onclick="posequestion5()"><img height=100 src="image/.gif">${tabr[3].b}</button>
<button onclick="posequestion5()"><img height=100 src="image/.gif">${tabr[3].c}</button>
<button onclick="posequestion5()"><img height=100 src="image/.gif">${tabr[3].d}</button>
<button onclick="posequestion5()"><img height=100 src="image/.gif">${tabr[3].e}</button>`
}

function posequestion5() {
    question.innerHTML = `<h1>${tabq[4]}</h1>`
reponse.innerHTML = 
`<button onclick="posequestion6()"><img height=100 src="image/cersei-lannister-game-of-thrones.gif">${tabr[4].a}</button>
<button onclick="posequestion6()"><img height=100 src="image/eve polastri.gif">${tabr[4].b}</button>
<button onclick="posequestion6()"><img height=100 src="image/annalise keating.gif">${tabr[4].c}</button>
<button onclick="posequestion6()"><img height=100 src="image/eleven.gif">${tabr[4].d}</button>
<button onclick="posequestion6()"><img height=100 src="image/rue.gif">${tabr[4].e}</button>`
}

function posequestion6() {
    question.innerHTML = `<h1>${tabq[5]}</h1>`
reponse.innerHTML = 
`<button onclick="posequestion7()"><img height=100 src="image/.gif">${tabr[5].a}</button>
<button onclick="posequestion7()"><img height=100 src="image/.gif">${tabr[5].b}</button>
<button onclick="posequestion7()"><img height=100 src="image/.gif">${tabr[5].c}</button>
<button onclick="posequestion7()"><img height=100 src="image/.gif">${tabr[5].d}</button>
<button onclick="posequestion7()"><img height=100 src="image/.gif">${tabr[5].e}</button>`
}

function posequestion7() {
    question.innerHTML = `<h1>${tabq[6]}</h1>`
reponse.innerHTML = 
`<button onclick="posequestion8()"><img height=100 src="image/damso.gif">${tabr[6].a}</button>
<button onclick="posequestion8()"><img height=100 src="image/beyoncé.webp">${tabr[6].b}</button>
<button onclick="posequestion8()"><img height=100 src="image/the weeknd.webp">${tabr[6].c}</button>
<button onclick="posequestion8()"><img height=100 src="image/drake.gif">${tabr[6].d}</button>
<button onclick="posequestion8()"><img height=100 src="image/aya.gif">${tabr[6].e}</button>`
}

function posequestion8() {
    question.innerHTML = `<h1>${tabq[7]}</h1>`
reponse.innerHTML = 
`<button onclick="resultat()"><img height=100 src="image/.gif">${tabr[7].a}</button>
<button onclick="resultat()"><img height=100 src="image/.gif">${tabr[7].b}</button>
<button onclick="resultat()"><img height=100 src="image/.gif">${tabr[7].c}</button>
<button onclick="resultat()"><img height=100 src="image/.gif">${tabr[7].d}</button>
<button onclick="resultat()"><img height=100 src="image/.gif">${tabr[7].e}</button>`
}
