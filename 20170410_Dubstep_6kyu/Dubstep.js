function songDecoder(song){
  return song.split('WUB').join(' ').trim().replace(/  +/g, ' ');;
}

/* best practice:

function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

*/