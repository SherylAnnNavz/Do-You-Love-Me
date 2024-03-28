const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too! uWu 😘";
  gif.src =
    "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // Increase the size of the "Yes" button
  let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
  currentSize += 5; // Increase size by 5 pixels
  yesBtn.style.fontSize = currentSize + "px";
});
