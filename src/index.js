const AdviceIDEL = document.querySelector(".advice h5");
const ParagraphEL = document.querySelector(".advice > div blockquote");
const AdviceContainer = document.querySelector(".advice > div");

function fetchAdvice() {
  let Advice;
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => (Advice = data.slip))
    .then(() => generateAdvice(Advice));
}

function generateAdvice(Advice) {
  AdviceIDEL.innerHTML = `ADVICE #${Advice.id}`;
  ParagraphEL.innerHTML = `&ldquo;${Advice.advice}&rdquo;`;
}
