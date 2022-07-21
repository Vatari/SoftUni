function songs(arr) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }

  let songs = [];
  let numberOfSongs = arr.shift();
  let typeList = arr.pop();

  for (let i = 0; i < numberOfSongs; i++) {
    let [type, name, time] = arr[i].split("_");
    let newSong = new Song(type, name, time);
    songs.push(newSong);
  }

  /* 
  for (let song of arr) {
    let [type, name, time] = song.split("_");
    let newSong = new Song(type, name, time);
    songs.push(newSong);
  } */
  if (typeList === "all") {
    songs.forEach((i) => console.log(i.name));
  } else {
    let filtered = songs.filter((i) => i.type === typeList);
    filtered.forEach((i) => console.log(i.name));
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
