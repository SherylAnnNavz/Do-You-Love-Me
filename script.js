const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const image = document.querySelector(".image");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too! uWu 😘";
  image.src = "https://raw.githubusercontent.com/SherylAnnNavz/Do-You-Love-Me/master/IMG_6424.jpeg";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // Increase the size of the button and text
  let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
  currentSize += 5;
  yesBtn.style.fontSize = currentSize + "px";
  question.style.fontSize = currentSize + "px";
});
