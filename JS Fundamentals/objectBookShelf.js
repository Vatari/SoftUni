function bookShelf(arr) {
  let bookShelf = {};

  for (let line of arr) {
    if (line.includes("->")) {
      let [id, genre] = line.split(" -> ");

      if (!bookShelf.hasOwnProperty(id)) {
        bookShelf[id] = { [genre]: [] };
      }
    } else {
      let [bookType, genre] = line.split(", ");

      for (let key in bookShelf) {
        if (bookShelf[key].hasOwnProperty(genre)) {
          bookShelf[key][genre].push(bookType);
          break;
        }
      }
    }
  }

  Object.keys(bookShelf)
    .sort(
      (a, b) =>
        Object.entries(bookShelf[b])[0][1].length -
        Object.entries(bookShelf[a])[0][1].length
    )
    .forEach((id) => {
      console.log(
        `${id} ${Object.keys(bookShelf[id])}: ${
          Object.values(bookShelf[id])[0].length
        }`
      );
      Object.values(bookShelf[id]).forEach((v) => {
        v.sort((a, b) => a.localeCompare(b)).forEach((v) => {
          console.log(`--> ${v}`);
        });
      });
    });
}
bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);
