// =========================
// Loader
// =========================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 3000);
});

// =========================
// Love Timer
// =========================

const loveDate = new Date("June 14, 2026 00:00:00");

function updateLoveTimer() {

    const now = new Date();

    const diff = now - loveDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("loveTimer").innerHTML = `
        ${days} Days<br>
        ${hours} Hours<br>
        ${minutes} Minutes<br>
        ${seconds} Seconds
    `;
}

// =========================
// Meeting Countdown
// =========================

const meetDate = new Date("July 18, 2026 18:00:00");

function updateMeetingTimer() {

    const now = new Date();

    const diff = meetDate - now;

    if (diff <= 0) {

        document.getElementById("meetTimer").innerHTML =
        "❤️ We're finally together ❤️";

        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("meetTimer").innerHTML = `
        ${days} Days<br>
        ${hours} Hours<br>
        ${minutes} Minutes<br>
        ${seconds} Seconds
    `;
}

setInterval(() => {

    updateLoveTimer();

    updateMeetingTimer();

},1000);

updateLoveTimer();
updateMeetingTimer();

// =========================
// Music Player
// =========================

const audio = document.getElementById("audio");

function playSong(song){

    audio.src = song;

    audio.play();

}

// =========================
// Floating Hearts
// =========================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random()*100+"vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (20+Math.random()*25)+"px";

    heart.style.opacity = "0.8";

    heart.style.pointerEvents = "none";

    heart.style.transition = "all 8s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.bottom="110vh";

        heart.style.transform="rotate(360deg)";

        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,700);

// =========================
// Scroll Animation
// =========================

document.querySelectorAll("a").forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        if(this.getAttribute("href").startsWith("#")){

            e.preventDefault();

            document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =========================
// Typewriter Effect
// =========================

const text = document.getElementById("typing");

const original = text.innerHTML;

text.innerHTML = "";

let i = 0;

function type(){

    if(i < original.length){

        text.innerHTML += original.charAt(i);

        i++;

        setTimeout(type,30);

    }

}

window.onload = type;

// =========================
// Random Title Animation
// =========================

const titles = [

"❤️ Enzo & Dieana ❤️",

"I Love You ❤️",

"Forever Together ❤️",

"My Favorite Person ❤️"

];

let t = 0;

setInterval(()=>{

    document.title = titles[t];

    t++;

    if(t>=titles.length) t=0;

},3000);

// =========================
// Console Surprise
// =========================

console.log(`
❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

Hello Dieana ❤️

If you're reading this...

Enzo loves you more
than words can describe.

Forever ❤️

❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
`);
