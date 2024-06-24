//Reference DOM Elements
let btnElement = document.getElementById("change-quote-btn");
let quoteElement = document.getElementById("quote-text");
let authorElement = document.getElementById("author-text");

function GenRandomInteger(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

function ChangeQuote() {
  let randomIndex = GenRandomInteger(0, citas.length)
  quoteElement.innerText = `"${citas[randomIndex].texto}"`;
  authorElement.innerText = citas[randomIndex].autor;
}

ChangeQuote();

btnElement.addEventListener('click', ChangeQuote);