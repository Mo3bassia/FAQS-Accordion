let listQuestions = document.querySelector(".questions-list");

// Make first open automaticlly after remove class hidden in HTML
function makeOpen(i) {
  listQuestions.querySelector(`li:nth-of-type(${i}) img`).src =
    "assets/images/icon-minus.svg";
  listQuestions
    .querySelector(`li:nth-of-type(${i}) .toggle`)
    .classList.remove("hidden");
  listQuestions.querySelector(`li:nth-of-type(${i}) .toggle`).style.height = `${
    listQuestions.querySelector("li:first-of-type .toggle").scrollHeight
  }px`;
}
makeOpen(1);

listQuestions.querySelectorAll("li").forEach((li) => {
  li.querySelector(".content").onclick = function () {
    li.querySelector(".toggle").classList.toggle("hidden");
    if (!li.querySelector(".toggle").classList.contains("hidden")) {
      li.querySelector("img").src = "assets/images/icon-minus.svg";
      li.querySelector(".toggle").style.height = `${
        li.querySelector(".toggle").scrollHeight
      }px`;
    } else {
      li.querySelector("img").src = "assets/images/icon-plus.svg";
      li.querySelector(".toggle").style.height = "0px";
    }
  };
});
