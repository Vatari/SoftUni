export function elementComposer(title, username, id) {
  let mainContainer = document.querySelector(".topic-container");
  let date = new Date();
  let today =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  let wrapDiv = document.createElement("div");
  wrapDiv.classList.add("topic-name-wrapper");
  let divTopicName = document.createElement("div");
  divTopicName.classList.add("topic-name");
  let a = document.createElement("a");
  a.style.cursor = "pointer";
  a.classList.add("normal");
  a.id = id;
  a.addEventListener("click", loadPosts);
  let h2 = document.createElement("h2");
  h2.textContent = title;
  let columnsDiv = document.createElement("div");
  columnsDiv.classList.add("columns");
  let divDate = document.createElement("div");
  let pTime = document.createElement("p");
  let creationTime = document.createElement("time");
  creationTime.textContent = today;
  pTime.textContent = `Date: `;
  pTime.appendChild(creationTime);
  let usernameDiv = document.createElement("div");
  usernameDiv.classList.add("nick-name");
  let pName = document.createElement("p");
  pName.textContent = "Username: ";
  let span = document.createElement("span");
  span.textContent = username;
  pName.appendChild(span);

  usernameDiv.appendChild(pName);
  divDate.appendChild(pTime);
  divDate.appendChild(usernameDiv);
  columnsDiv.appendChild(divDate);
  a.appendChild(h2);
  divTopicName.appendChild(a);
  divTopicName.appendChild(columnsDiv);
  wrapDiv.appendChild(divTopicName);
  mainContainer.appendChild(wrapDiv);
}

function loadPosts(ev) {
  let mainDiv = document.querySelector(".container main");
  let id = ev.target.parentElement.parentElement.id;
  let timeData =
    ev.target.parentElement.parentElement.children[1].children[0].children[0]
      .children[0].textContent;
  mainDiv.innerHTML = "";

  let postsUrl = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`;
  fetch(postsUrl)
    .then((response) => response.json())
    .then((data) => {
      let post = data.post;
      let name = data.username;

      mainDiv.appendChild(createElements(post, name, timeData, id));
      mainDiv.appendChild(createForm());
    });
}

function createElements(post, name, time, id) {
  let commmentDiv = document.createElement("div");
  commmentDiv.id = id;
  commmentDiv.classList.add("comment");
  let headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  let img = document.createElement("img");
  img.src = "./static/profile.png";
  img.alt = "avatar";
  let pNameDate = document.createElement("p");
  let spanName = document.createElement("span");
  spanName.textContent = name + " posted on ";
  let time = document.createElement("time");
  time.textContent = time;
  pNameDate.appendChild(spanName);
  pNameDate.appendChild(time);
  let pPost = document.createElement("p");
  pPost.textContent = post;
  headerDiv.appendChild(img);
  headerDiv.appendChild(pNameDate);
  headerDiv.appendChild(pPost);
  commmentDiv.appendChild(headerDiv);
  return commmentDiv;
}

function createForm() {
  let id = document.querySelector(".comment").id;
  loadComments(id);
  let answerDiv = document.createElement("div");
  answerDiv.classList.add("answer-comment");
  let divAnswer = document.createElement("div");
  divAnswer.classList.add("answer");
  let answerForm = document.createElement("form");
  answerForm.addEventListener("submit", loadPostsBody);
  let postText = document.createElement("textarea");
  postText.name = "postText";
  postText.id = "comment";
  postText.cols = 30;
  postText.rows = 10;
  answerForm.appendChild(postText);
  let divContainer = document.createElement("div");
  let labelUser = document.createElement("label");
  labelUser.setAttribute("for", "username");
  labelUser.textContent = "Username ";
  let span = document.createElement("span");
  span.className = "red";
  span.textContent = "*";
  labelUser.appendChild(span);
  let usernameInput = document.createElement("input");
  usernameInput.name = "username";
  usernameInput.id = "username";
  usernameInput.type = "text";
  divContainer.appendChild(labelUser);
  divContainer.appendChild(usernameInput);
  answerForm.appendChild(divContainer);
  let postButton = document.createElement("button");
  postButton.textContent = "Post";
  answerForm.appendChild(postButton);
  let spanCurrent = document.createElement("span");
  spanCurrent.textContent = "currentUser";
  let pCurrent = document.createElement("p");
  pCurrent.appendChild(spanCurrent);
  let spanComment = document.createElement("span");
  spanComment.textContent = " comment:";
  pCurrent.appendChild(spanComment);
  divAnswer.appendChild(answerForm);
  answerDiv.appendChild(pCurrent);
  answerDiv.appendChild(divAnswer);
  return answerDiv;
}

function loadComments(id) {
  fetch(
    `http://localhost:3030/jsonstore/collections/myboard/comments/${id}`
  )
    .then((response) => response.json())
    .then((data) => {
      Object.values(data).forEach((x) => {
        let newComment = createComment(x.username, x.creationDate, x.comment);
        let refNode = document.querySelector(".answer-comment");
        let parentNode = document.querySelector("main");
        parentNode.insertBefore(newComment, refNode);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function loadPostsBody(ev) {
  ev.preventDefault();

  let id = ev.target.parentElement.parentElement.parentElement.children[0].id;
  let url = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let username = document.querySelector("#username").value;
      let comment = document.querySelector("#postText").value;

      let date = new Date();
      let creationDate =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
      if (username == "") {
        return alert("Username is required");
      }

      let topicName = data.title;

      let createdComment = {
        comment,
        username,
        creationDate,
        topicName,
      };

      fetch(
        `http://localhost:3030/jsonstore/collections/myboard/comments/${id}`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(createdComment),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let newComment = createComment(
            data.username,
            data.creationDate,
            data.comment,
            

    
          );
          let referenceNode = document.querySelector(".answer-comment");
          let parentNode = document.querySelector("main");
          parentNode.insertBefore(newComment, referenceNode);
        });
    });
}

function createComment(user, creationDate, content) {
  let commentDiv = document.createElement("div");
  commentDiv.classList.add("user-comment");
  let wrapDivTopic = document.createElement("div");
  wrapDivTopic.classList.add("topic-name-wrapper");
  let topicNameDiv = document.createElement("div");
  topicNameDiv.classList.add("topic-name");
  let pNameDate = document.createElement("p");
  pNameDate.innerHTML = `<p><strong>${user}</strong> commented on <time>${creationDate}</time></p>`;
  let contentDiv = document.createElement("div");
  contentDiv.classList.add("post-content");
  let pContent = document.createElement("p");
  pContent.textContent = content;
  contentDiv.appendChild(pContent);
  topicNameDiv.appendChild(pNameDate);
  topicNameDiv.appendChild(contentDiv);
  wrapDivTopic.appendChild(topicNameDiv);
  commentDiv.appendChild(wrapDivTopic);
  return commentDiv;
}
