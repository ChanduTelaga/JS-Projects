function britishToAmerican(sentence) {
  let replacements = {
    colour: "color",
    flavour: "flavor",
    honour: "honor",
    neighbour: "neighbor",
    labour: "labor",
    humour: "humor",
    centre: "center",
    fibre: "fiber",
    defence: "defense",
    offence: "offense",
    organise: "organize",
    recognise: "recognize",
    analyse: "analyze"
  }
  
  for(const [british, american] of Object.entries(replacements)) {
    const regex = new RegExp(british, "gi");

    sentence = sentence.replace(regex, match => {
      if(match[0] === match[0].toUpperCase()) {
        return american[0].toUpperCase + american.slice(1);
      }
      return american
    });
  }

  return sentence;
}

console.log(britishToAmerican("It's an honour to meet someone with such humour."));