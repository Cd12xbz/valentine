document.addEventListener("DOMContentLoaded", function() {
    setInterval(showLove, 500);
});

function showLove() {
    let hearts = document.getElementById("hearts");
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    hearts.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Back To Home
function showBTS() {
    window.open("bts.html", "_parent");
}