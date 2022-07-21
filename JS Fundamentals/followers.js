function followers(arr) {
  let result = {};

  while (arr[0] != "Log out") {
    let [command, name, count] = arr.shift().split(`: `);
    count = +count;

    if (command == "New follower") {
      if (result.hasOwnProperty(name) == false) {
        result[name] = { likes: 0, comments: 0 };
      }
    }
    if (command == "Like") {
      if (result.hasOwnProperty(name) == false) {
        result[name] = { likes: count, comments: 0 };
      } else {
        result[name].likes += count;
      }
    }
    if (command == "Comment") {
      if (result.hasOwnProperty(name) == false) {
        result[name] = { likes: 0, comments: 1 };
      } else {
        result[name].comments++;
      }
    }
    if (command == "Blocked") {
      if (result.hasOwnProperty(name) == false) {
        console.log(`${name}` + ` ` + "doesn't exist.");
      }
      delete result[name];
    }
  }

  let count = Object.keys(result).length;
  console.log(`${count} followers`);

  for (let currUser in result) {
    let sum = result[currUser].likes + result[currUser].comments;

    console.log(`${currUser}: ${sum}`);
  }
}

followers([
  "New follower: George",
  "Like: George: 5",
  "New follower: George",
  "Log out",
]);

console.log(`---`);

followers([
  "Like: Katy: 3",
  "Comment: Katy",
  "New follower: Bob",
  "Blocked: Bob",
  "New follower: Amy",
  "Like: Amy: 4",
  "Log out",
]);

console.log(`---`);

followers([
  "Blocked: Amy",
  "Comment: Amy",
  "New follower: Amy",
  "Like: Tom: 5",
  "Like: Ellie: 5",
  "Log out",
]);
