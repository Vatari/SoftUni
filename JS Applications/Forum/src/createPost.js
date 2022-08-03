const postTitle = document.getElementById("topicName");
const username = document.getElementById("username");
const content = document.getElementById("postText");

export async function createTopic(url) {
  const postData = {
    postTitle: postTitle.value,
    username: username.value,
    content: content.value,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (err) {
    alert(err.message);
  }
}
