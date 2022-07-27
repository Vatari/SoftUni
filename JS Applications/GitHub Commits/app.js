function loadCommits() {
  const username = document.querySelector("#username").value;
  const repo = document.querySelector("#repo").value;

  const ulList = document.querySelector("#commits");

  const baseUrl = `https://api.github.com/repos/${username}/${repo}/commits`;

  async function getCommits(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const commits = await response.json();

      for (let commit of commits) {
        ulList.innerHTML += `<li>${commit.commit.author.name}: ${commit.commit.message}</li>`;
      }
    } catch (err) {
      ulList.innerHTML = err.message;
    }
  }
  getCommits(baseUrl);
}
