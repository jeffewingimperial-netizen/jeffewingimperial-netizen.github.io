// ===============================
// JEFF IMPERIAL PORTFOLIO SCRIPT
// ===============================

// Typing Animation
const text = [
    "Senior QA Engineer",
    "Manual Tester",
    "Automation Tester",
    "API Tester",
    "Full Stack QA",
    "AI QA Enthusiast"
];

let index = 0;
let char = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    if (!deleting) {
        typing.innerHTML = text[index].substring(0, char++);
    } else {
        typing.innerHTML = text[index].substring(0, char--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && char === text[index].length + 1) {
        speed = 1500;
        deleting = true;
    }

    if (deleting && char === 0) {
        deleting = false;
        index = (index + 1) % text.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Dark Mode
// ===============================

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {
    darkBtn.onclick = () => {
        document.body.classList.toggle("dark");
    };
}


// ===============================
// Download Resume
// ===============================

const downloadBtn = document.getElementById("downloadResume");

if (downloadBtn) {
    downloadBtn.onclick = () => {

        const link = document.createElement("a");

        link.href = "Jeff_Resume.pdf";

        link.download = "Jeff_Imperial_Resume.pdf";

        link.click();

    };
}


// ===============================
// Copy Email
// ===============================

const copyBtn = document.getElementById("copyEmail");

if (copyBtn) {

    copyBtn.onclick = () => {

        navigator.clipboard.writeText("Jeffewing.imperial@gmail.com");

        copyBtn.innerHTML = "✔ Email Copied";

        setTimeout(() => {

            copyBtn.innerHTML = "Copy Email";

        }, 2000);

    };

}


// ===============================
// Clickable Profile Image
// ===============================

const profile = document.getElementById("profile");

if (profile) {

    profile.style.cursor = "pointer";

    profile.addEventListener("click", () => {

        window.open("jeff.png", "_blank");

    });

}


// ===============================
// Scroll Animation
// ===============================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => observer.observe(el));


// ===============================
// Smooth Navigation
// ===============================

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior:"smooth"
            });

    });

});


// ===============================
// Greeting
// ===============================

window.onload = () => {

    console.log("Welcome to Jeff Imperial's Portfolio!");

    setTimeout(() => {

        alert("👋 Welcome! Feel free to explore my QA Portfolio.");

    },1000);

};
