const { fstat } = require("fs");

function markovMe() {
    const markovChain = {}
    const textArr = document.getElementById('inputBox').value.split(' ')
    for (let i = 0; i < textArr.length; i++) {
      let word = textArr[i].toLowerCase().replace(/[\W_]/, "")
      if (!markovChain[word]) {
        markovChain[word] = []
        }
      if (textArr[i + 1]) {
        markovChain[word].push(textArr[i + 1].toLowerCase().replace(/[\W_]/, ""));
  }
  }
    const words = Object.keys(markovChain)
    let word = words[Math.floor(Math.random() * words.length)]
    let result = ''
    for (let i = 0; i < words.length; i++ ) {
      result += word + ' ';
      newWord =  markovChain[word][Math.floor(Math.random() * markovChain[word].length)]
      word = newWord;
      if (!word || !markovChain.hasOwnProperty(word)) word = words[Math.floor(Math.random() * words.length)]
    }
   // Node.fstat = result;
  } 