const { fs } = require("fs");

function markov() {
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
   // Node.fs = result;
} 

function parseDiscordData(data, flags) {
  const markovString;
  const newFile;

  const jsonFile = data
  fs.readFileSync(jsonFile, (err, data) => {
    if (err) throw new err;
    let parsedData = JSON.parse(data);

    for (messages[id].id in parsedData) {
      if (data.hasOwnProperty(messages[id])) {
        const element = data[messages[id]];
        fs.writeFile(data)
        let textStrings;
      }

      let mystring = JSON.stringify(textStrings, null, 2)
    }
  })

}
  // SED CMD IN THEORY
  //sed -e "s/old_string/new_string/"
  //python???? Node???????????im RETRARD?
  // forEach messages.id in messages { || += messages.content + /n