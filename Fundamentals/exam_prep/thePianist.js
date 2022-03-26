function solve(arr) {


/*     You are a pianist and you like to keep a list of your favorite piano pieces. Create a program, to help you organize it and add, change, remove pieces from it!
    On the first line of the standard input you will receive an integer n – the number of pieces that you will initially have. On the next n lines the pieces themselves 
    will follow with their composer and key, separated by "|" in the following format:
    {piece}|{composer}|{key}
    Then, you will be receiving different commands, each on a new line, separated by "|", until the "Stop" command is given
    
    Add|{piece}|{composer}|{key}
    You need to add the given piece with the information about it to the other pieces
    If the piece is already in the collection, print:
    {piece} is already in the collection!"
    If the piece is not in the collection, print:
    "{piece} by {composer} in {key} added to the collection!"
    Remove|{piece}
    If the piece is in the collection, remove it and print:
    "Successfully removed {piece}!"
    
    If the piece is not in the collection, print:
    "Invalid operation! {piece} does not exist in the collection."
    
    ChangeKey|{piece}|{new key}
    If the piece is in the collection, change its key with the given one and print:
    "Changed the key of {piece} to {new key}!"
    
    If the piece is not in the collection, print:
    "Invalid operation! {piece} does not exist in the collection."
    
    Upon receiving the "Stop" command you need to print all pieces in your collection, sorted by their name and by the name of their composer in alphabetical order, in the following format:
    "{Piece} -> Composer: {composer}, Key: {key}"
    
    Input/Constraints
    You will receive a single integer at first – the initial number of pieces in the collection
    For each piece you will receive a single line of text with information about it.
    Then you will receive multiple commands in the way described above, until the command "Stop".
    Output
    All the output messages with the appropriate formats are described in the problem description. */




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
  
  solve([
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
  