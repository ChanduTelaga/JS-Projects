function getMood(genre, bpm) {
  const bpmData = {
    focus: {
      classical: {
        bpmMin: 60,
        bpmMax: 109
      },
      electronic: {
        bpmMin: 60,
        bpmMax: 89,
      }
    },
 
    happy: {
      pop: {
        bpmMin: 60,
        bpmMax: 180
      },
      classical: {
        bpmMin: 110,
        bpmMax: 180
      },
     
      rock: {
        bpmMin: 60,
        bpmMax: 129
      },
      electronic: {
        bpmMin: 90,
        bpmMax: 134
      }
    },
 
   
    hype: {
        rock: {
          bpmMin: 130,
          bpmMax: 180
        },
        electronic: {
          bpmMin: 135,
          bpmMax: 180
        }
      }
  }
 
  for(const mood in bpmData) {
    const range = bpmData[mood][genre];
 
    if(range && bpm >= range.bpmMin && bpm <= range.bpmMax) {
      return mood;
    }
  }
 
  return "No Mood Found";
}
 
console.log(getMood("rock", 111));