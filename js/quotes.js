const quotes = [
  {
    quote: "When life gives you lemons, get a life.",
    author: "James Han",
  },
  {
    quote: "Roses are red, Violets are blue, and I love you. Sike.",
    author: "James Han",
  },
  {
    quote: "I like pie.",
    author: "James Han",
  },
  {
    quote: "Dab on them haters.",
    author: "James Han",
  },
  {
    quote: "Is that a jojo reference?",
    author: "James Han",
  },
  {
    quote: "Epic moment.",
    author: "James Han",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
