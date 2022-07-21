function thePianist(arr) {
  let numberOfPieces = arr.shift();
  let pieces = {};
  for (let i = 0; i < numberOfPieces; i++) {
    let [song, composer, key] = arr.shift().split("|");
    pieces[song] = [composer, key];
  }
  while (arr[0] !== "Stop") {
    let [command, song, composer, key] = arr.shift().split("|");

    if (command === "Add") {
      if (!Object.keys(pieces).includes(song)) {
        pieces[song] = [composer, key];
        console.log(
          `${song} by ${composer} in ${key} added to the collection!`
        );
      } else {
        console.log(`${song} is already in the collection!`);
      }
    } else if (command === "Remove") {
      if (Object.keys(pieces).includes(song)) {
        delete pieces[song];
        console.log(`Successfully removed ${song}!`);
      } else {
        console.log(
          `Invalid operation! ${song} does not exist in the collection.`
        );
      }
    } else if (command === "ChangeKey") {
      if (Object.keys(pieces).includes(song)) {
        let newKey = composer;
        pieces[song].splice(1, 1, newKey);
        console.log(`Changed the key of ${song} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${song} does not exist in the collection.`
        );
      }
    }
  }
  let result = Object.entries(pieces);
  for (let song of result) {
    console.log(`${song[0]} -> Composer: ${song[1][0]}, Key: ${song[1][1]}`);
  }
}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
