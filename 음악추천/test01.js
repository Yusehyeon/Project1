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

function recommendMusic() {
  const checkboxes = document.querySelectorAll('input[name="genre"]:checked');
  const selectedGenres = Array.from(checkboxes).map(
    (checkbox) => checkbox.value
  );

  const musicData = {
    ballad: ["노래1", "노래2", "노래3"],
    dance: ["노래4", "노래5", "노래6"],
    rap_hiphop: ["노래7", "노래8", "노래9"],
    idol: ["노래10", "노래11", "노래12"],
    RnB_soul: ["노래13", "노래14", "노래15"],
    pop: ["노래16", "노래17", "노래18"],
  };

  const musicList = document.getElementById("music-list");
  musicList.innerHTML = "";

  selectedGenres.forEach((genre) => {
    const genreMusic = musicData[genre];
    if (genreMusic) {
      const genreTitle = document.createElement("h3");
      genreTitle.textContent = genre;
      musicList.appendChild(genreTitle);

      genreMusic.forEach((song) => {
        const listItem = document.createElement("li");
        listItem.textContent = song;
        musicList.appendChild(listItem);
      });
    }
  });

  const recommendedMusic = document.getElementById("recommended-music");
  recommendedMusic.classList.remove("hidden");
}

document
  .getElementById("recommend-btn")
  .addEventListener("click", recommendMusic);

// 페이지 로드 시 체크박스 정렬
arrangeCheckboxes();

// 체크박스 변경 시 정렬
const checkboxes = document.querySelectorAll('input[name="genre"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", arrangeCheckboxes);
});
