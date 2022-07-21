function solve() {
  let asnwers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];
  let answered = 0;
  let index = 0;

  [...document.querySelectorAll(".answer-text")].map((x) =>
    x.addEventListener("click", function nextSection(e) {
      if (asnwers.includes(e.target.textContent)) {
        answered++;
      }

      let currentSection = document.querySelectorAll("section")[index];
      currentSection.style.display = "none";

      if (document.querySelectorAll("section")[index + 1] !== undefined) {
        let nextSection = document.querySelectorAll("section")[index + 1];
        nextSection.style.display = "block";
        index++;
      } else {
        document.querySelector("#results").style.display = "block";
        if (answered !== 3) {
          document.querySelector(
            "#results h1"
          ).textContent = `You have ${answered} right answers`;
        } else {
          document.querySelector("#results h1").textContent =
            "You are recognized as top JavaScript fan!";
        }
      }
    })
  );
}
