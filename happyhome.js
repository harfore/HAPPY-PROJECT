let topp = document.getElementById('topp');
let photo = document.getElementById('photo');
let title = document.getElementById('titletop');
let youtube = document.getElementById('youtube');
youtube.src = '';
youtube.style.display = "none";
let url = 'image/tv.gif';
let pose = 1;
photo.src = url;
title.innerText = "Top 3 trendy anime";

let buttonright = document.getElementById('buttonright')
buttonright.addEventListener('click', async (e) => {
    // prevent default form behaviour
    e.preventDefault()

    try {
        const res = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing&order_by=popularity`);
        const data = await res.json();
        console.log(data)
        if (pose == 1) {
        title.innerText = data.data[0].title
        url = data.data[0].images.jpg.image_url
        photo.src = url
        youtube.style.display = "flex"
        youtube.src = data.data[0].trailer.embed_url
        pose = 2
        }
        else if (pose == 2) {
        title.innerText = data.data[1].title
        url = data.data[1].images.jpg.image_url
        photo.src = url
        youtube.style.display = "flex"
        youtube.src = data.data[1].trailer.embed_url
        pose = 3
        }
        else if (pose == 3) {
        title.innerText = data.data[2].title
        url = data.data[2].images.jpg.image_url
        photo.src = url
        youtube.style.display = "flex"
        youtube.src = data.data[2].trailer.embed_url
        pose = 4
        }
        else if (pose == 4) {
        title.innerText = "Top 3 trendy anime"
        url = 'image/tv.gif'
        photo.src = url
        youtube.src = ''
        youtube.style.display = "none"
        pose = 1
        }
    } catch (err) {
        console.log(err);
        topp.innerHTML = `<p>${err}</p>`;
    }
    
})

buttonleft.addEventListener('click', async (e) => {
    // prevent default form behaviour
    e.preventDefault()

    try {
        const res = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing&order_by=popularity`);
        const data = await res.json();
        if (pose == 1) {
            title.innerText = data.data[2].title
            url = data.data[2].images.jpg.image_url
            photo.src = url
            youtube.style.display = "flex"
            youtube.src = data.data[2].trailer.embed_url
            pose = 4
            }
            else if (pose == 2) {
            title.innerText = "Top 3 trendy anime"
            url = 'image/tv.gif'
            photo.src = url
            youtube.src = ''
            youtube.style.display = "none"
            pose = 1
            }
            else if (pose == 3) {
            title.innerText = data.data[0].title
            url = data.data[0].images.jpg.image_url
            photo.src = url
            youtube.style.display = "flex"
            youtube.src = data.data[0].trailer.embed_url
            pose = 2
            }
            else if (pose == 4) {
            title.innerText = data.data[1].title
            url = data.data[1].images.jpg.image_url
            photo.src = url
            youtube.style.display = "flex"
            youtube.src = data.data[1].trailer.embed_url
            pose = 3
            }
    } catch (err) {
        console.log(err);
        topp.innerHTML = `<p>${err}</p>`;
    }
})
