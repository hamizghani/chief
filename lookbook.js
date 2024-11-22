// Image paths and information
const images = [
    { src: "img1.jpg", title: "Spring/Summer 2024", description: "Raglan Tee (Red/White)" },
    { src: "img2.jpg", title: "Spring/Summer 2024", description: "Sweater (Pink/Green)" },
    { src: "img3.jpg", title: "Spring/Summer 2024", description: "Hoodie (Yellow/Gray)" },
    // Add more images as needed
];
setInterval(() => {
    document.getElementById("footer-logo").src = `mascot/an-${logondex}.png`;
    logondex = (logondex % 36) +1;
}, 112);

let currentIndex = 0;

function changeImage(index) {
    const mainImage = document.getElementById("main-image");
    const imageInfo = document.querySelector(".image-info");
    const imageCount = document.getElementById("image-count");

    // Update the main image src with a sliding effect
    mainImage.style.transform = "translateX(-100%)";
    setTimeout(() => {
        mainImage.src = images[index].src;
        imageInfo.querySelector("h3").textContent = images[index].title;
        imageInfo.querySelector("p").textContent = images[index].description;
        imageCount.textContent = `${index + 1} / ${images.length}`;
        mainImage.style.transform = "translateX(0)";
    }, 250); // Adjust delay to match CSS transition time

    // Update active thumbnail
    document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
        thumb.classList.toggle("active", i === index);
    });

    currentIndex = index;
}

// Initialize the first image and set the first thumbnail as active
window.onload = () => {
    changeImage(0);
};
