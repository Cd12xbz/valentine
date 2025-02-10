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

let currentIndex = 0; // Indeks gambar saat ini
let images = [
    { src: "dist/image/pic1.jpg", caption: "25 Oktober 2024" },
    { src: "dist/image/pic7.jpg", caption: "22 November 2024" },
    { src: "dist/image/pic2.jpg", caption: "27 November 2024" },
    { src: "dist/image/pic3.jpg", caption: "28 November 2024" },
    { src: "dist/image/pic6.jpg", caption: "27 Desember 2024" },
    { src: "dist/image/pic4.jpg", caption: "13 Januari 2025" },
    { src: "dist/image/pic5.jpg", caption: "14 Januari 2025" },
];

function showImage() {
    let randomPic = document.getElementById("randomPic");
    randomPic.innerHTML = ''; // Kosongkan elemen sebelumnya

    let figure = document.createElement("figure");
    let imgElement = document.createElement("img");
    imgElement.classList.add("responsive-image");
    
    let caption = document.createElement("figcaption");

    figure.appendChild(imgElement);
    figure.appendChild(caption);
    randomPic.appendChild(figure);

    function updateSlide() {
        let img = images[currentIndex];
        imgElement.src = img.src;
        imgElement.alt = "Slideshow Image";
        caption.textContent = img.caption;

        currentIndex = (currentIndex + 1) % images.length; // Loop kembali ke awal setelah gambar terakhir
    }

    updateSlide();                   // Tampilkan gambar pertama segera
    setInterval(updateSlide, 3000);  // Ganti gambar setiap 3 detik
}

// Video
function showVideo() {
    window.open("suprise.html", "_parent");
}

