const images = [
  { img: "./iamge3.jpg" },
  { img: "./image.jpg" },
  { img: "./image1.jpg" },
  { img: "./image2.jpg" },
  { img: "./image4.png" },
];

let contagem = 0;
const hero = document.querySelector(".hero");
hero.style.transition = "opacity 1s"
setInterval(() => {
    hero.style.opacity = "0.5"
  setTimeout(() => {
    contagem++;
    if (contagem >= images.length) {
      contagem = 0;
    }
    hero.style.background = `url(${images[contagem].img}) center center no-repeat`;
    hero.style.backgroundSize = "cover";
    hero.style.opacity = "1"
  }, 100);
}, 2000);
