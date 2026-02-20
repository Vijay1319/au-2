
// Intro Transition
setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
}, 3000);

// Snow Effect
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];
for (let i = 0; i < 150; i++) {
    snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        d: Math.random() + 0.5
    });
}

function drawSnow() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < snowflakes.length; i++) {
        let f = snowflakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    moveSnow();
}

function moveSnow() {
    for (let i = 0; i < snowflakes.length; i++) {
        let f = snowflakes[i];
        f.y += f.d;
        if (f.y > canvas.height) {
            f.y = 0;
            f.x = Math.random() * canvas.width;
        }
    }
}

function updateSnow() {
    drawSnow();
    requestAnimationFrame(updateSnow);
}
updateSnow();
