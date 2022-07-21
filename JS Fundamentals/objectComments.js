function comments(arr) {
  let data = new Map();
  let users = [];
  let articles = [];

  for (let line of arr) {
    if (!line.includes(":")) {
      if (line.includes("user")) {
        let [user, username] = line.split(" ");

        users.push(username);
      } else if (line.includes("article")) {
        let [article, articleName] = line.split(" ");

        articles.push(articleName);
      }
    } else if (line.includes(":")) {
      line = line.split(": ");
      line[0] = line[0].split(" ");
      let user = line[0].shift();
      let articleName = line[0].pop();
      if (users.includes(user) && articles.includes(articleName)) {
        let [title, content] = line[1].split(", ");
        if (!data.has(articleName)) {
          data.set(articleName, new Map());
          data.get(articleName).set(user, new Map());
          data.get(articleName).get(user).set(title, content);
        } else {
          data.get(articleName).set(user, new Map());
          data.get(articleName).get(user).set(title, content);
        }
      }
    }
  }
  let arrFromData = [...data];
  for (let el of arrFromData) {
    el[1] = [...el[1]];
  }
  let sorted = (a, b) => b[1].length - a[1].length;
  arrFromData.sort(sorted);
  for (let el of arrFromData) {
    // if (row[1].length > 1) {
    // }
    el[1].sort((a, b) => a[0].localeCompare(b[0]));
  }
  for (let el of arrFromData) {
    console.log(`Comments on ${el[0]}`);
    for (let element of el[1]) {
      console.log(
        `--- From user ${element[0]}: ${[...element[1].keys()][0]} - ${
          [...element[1].values()][0]
        }`
      );
    }
  }
}
comments([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
