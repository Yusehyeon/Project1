function recommendMusic() {
  const genres = Array.from(document.getElementsByName("genre"))
    .filter((genre) => genre.checked)
    .map((genre) => genre.value);

  if (genres.length === 0) {
    alert("장르를 선택해주세요.");
    return;
  }

  const musicList = document.getElementById("music-list");
  musicList.innerHTML = "";

  for (const genre of genres) {
    const listItem = document.createElement("li");
    listItem.textContent = `${genre}: ${getRecommendedMusic(genre)}`;
    musicList.appendChild(listItem);
  }

  document.getElementById("recommended-music").classList.remove("hidden");
}

function arrangeCheckboxes() {
  const checkboxesContainer = document.getElementById("genre-checkboxes");
  const checkboxes = checkboxesContainer.getElementsByTagName("label");
  const numCheckboxes = checkboxes.length;

  if (numCheckboxes > 5) {
    checkboxesContainer.classList.add("flex", "flex-wrap");
  } else {
    checkboxesContainer.classList.remove("flex", "flex-wrap");
  }
}

document
  .getElementById("recommend-btn")
  .addEventListener("click", recommendMusic);
document.addEventListener("DOMContentLoaded", arrangeCheckboxes);
window.addEventListener("resize", arrangeCheckboxes);

function getRecommendedMusic(genre) {
  switch (genre) {
    case "rock":
      return "Queen - Bohemian Rhapsody";
    case "pop":
      return "Michael Jackson - Thriller";
    case "rap/hip-hop":
      return "Eminem - Lose Yourself";
    default:
      return "";
  }
}
