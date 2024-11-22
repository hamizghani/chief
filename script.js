// Logo Animation
let logoIndex = 1;
setInterval(() => {
    document.getElementById("logo").src = `chief text/Untitled_Artwork-${logoIndex}.png`;
    logoIndex = (logoIndex % 58) + 1; 
}, 112);



// Product Detail Function
function showProductDetail(productId) {
    window.location.href = `product.html?id=${productId}`;
}



// JavaScript to change the logo text/icon every second
const logos = ["(0)", "(1)", "(2)", "(3)"]; // Add more logos or icons here
let logondex = 1;

setInterval(() => {
    document.getElementById("footer-logo").src = `mascot/an-${logondex}.png`;
    logondex = (logondex % 36) +1;
}, 112);

