const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records1, id, prop, value) {
  if(value.trim().length === 0) {
    delete records1[id][prop];
  }else if(prop !== "tracks" && value.trim().length !== 0 ){
    records1[id][prop] = value;
  }else if(prop ==="tracks" && value.trim().length !== 0 && !(records1[id].hasOwnProperty("tracks"))) {
    records1[id][prop] = [];
    records1[id][prop].push(value);
  }else if(prop === "tracks" && value.trim().length !== 0) {
    records1[id][prop].push(value);
  }

  return records1;
}


console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));


