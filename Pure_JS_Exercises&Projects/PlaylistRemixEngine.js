const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(arr) {
  if(!(Array.isArray(arr))) {
    return [];
  }

  let fA = [];
  let flatIndex = 0
  for(let i = 0; i<arr.length; i++) {
    for(let j = 0; j<arr[i].length; j++) {
      fA.push(arr[i][j]);
      fA[fA.length -1].source = [i, j];
    }
    flatIndex++
  }

  return fA;
}

function scoreTracks(fAA) {
  for(let i = 0; i<fAA.length; i++) {
    fAA[i].score = fAA[i].votes*10 - Math.abs(fAA[i].bpm -120);
  }

  return fAA
}

function dedupeTracks(sAA) {
  let check = {};
  let res = []
  for(let i = 0; i<sAA.length; i++) {
    if(!check[sAA[i].trackId]) {
      check[sAA[i].trackId] = true;
      res.push(sAA[i]);
    }
  }

  return res;
}

function enforceArtistQuota(dAA, num) {
  let artistCount = {};
  let result = [];
  for(let i = 0; i<dAA.length; i++) {
    const artist = dAA[i].artist;

    if(!artistCount[artist]) {
      artistCount[artist] = 0;
    }

    if(artistCount[artist] < num) {
      result.push(dAA[i]);
      artistCount[artist]++;
    }
  }

  return result;
}


function buildSchedule(eAA) {
  let result = [];

  for(let i = 0; i<eAA.length; i++) {
    const slot = i+1;
    const trackId = eAA[i].trackId
    result.push({slot, trackId});
  }

  return result;
}


function remixPlaylist(arr, num) {
  let fAA = flattenPlaylists(arr);
  let sAA = scoreTracks(fAA);
  let dAA = dedupeTracks(sAA);
  let eAA = enforceArtistQuota(dAA, num)
  let bAA = buildSchedule(eAA);

  return bAA;
}

