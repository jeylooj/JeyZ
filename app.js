'use strict';

const artist = document.getElementById('artists');
const hero = document.getElementById('hero');



async function getData() {
    const getD = await fetch('Data/favArtists.json');
    const res = await getD.json();
    const data = (res.favArtists.forEach(e => {
        const markup = `
        <div class="artist">
        <img src="${e.img}">
        <p class="name">${e.name}</p>
        </div>
        `;
        artist.insertAdjacentHTML("beforeend", markup)
    }))
}
getData();

// function getData() {
//     fetch('Data/favArtists.json').
//     then(res => res.json()).
//     then(data => {
//         data.favArtists.forEach(e => {
//             const markup = `
//             <div class="artist">
//             <img src="${e.img}">
//             <p class="name">${e.name}</p>
//             </div>
//             `;
//             artist.insertAdjacentHTML("beforeend", markup)
//         });
//     })
// }


async function getPost() {
    const getPost = await fetch('Data/heroData.json');
    const res = await getPost.json();
    const data = res.hero.forEach(e => {
        const markup = `
        <div class="post">
        <img src="${e.img} "class="post-img">
        <span class="tag">${e.tag}</span>
        <p class="title">${e.title}</p>
        <div class="rate">
            <img src="/images/speech-bubble.png" alt="" class="img-rate">
            <span>${e.rate}</span>
        </div>
    </div>
        `
        hero.insertAdjacentHTML("beforeend", markup)

    })
}


// function getPost() {
//     fetch('Data/heroData.json').
//     then(res => res.json()).
//     then(data => {
//         data.hero.forEach(e => {
//             const markup = `
//             <div class="post">
//             <img src="${e.img} "class="post-img">
//             <span class="tag">${e.tag}</span>
//             <p class="title">${e.title}</p>
//             <div class="rate">
//                 <img src="/images/speech-bubble.png" alt="" class="img-rate">
//                 <span>${e.rate}</span>
//             </div>
//         </div>
//             `
//             hero.insertAdjacentHTML("beforeend", markup)

//         });
//     })
// }
// getData();
getPost();