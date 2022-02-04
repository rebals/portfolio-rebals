const button = document.querySelector("button");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch ("https://drive.google.com/file/d/1t0j0p7sKuhwLTLfpDmSTEr_3l_z-Frdo/view?usp=sharing");
    const images = await res.json();
    // console.log (images);
    selectRandomImage(images);
}

button.addEventListener("click", function(){
    getImage();
});