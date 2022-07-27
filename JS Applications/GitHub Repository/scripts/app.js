async function loadRepos() {
  const username = document.querySelector("#username").value;
  const baseUrl = `https://api.github.com/users/${username}/repos`;
  const ulList = document.querySelector("#repos");


    try {
      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const repos = await response.json();
      ulList.innerHTML = "";

      for (let repo of repos) {
        let li = document.createElement("li");
        li.innerHTML = `<li>
	<a href=${repo.html_url}>
		${repo.full_name}
	</a>
</li>`;
        ulList.appendChild(li);
      }
    } catch (err) {
      ulList.innerHTML = `${err.message}`;
    }
  

}


