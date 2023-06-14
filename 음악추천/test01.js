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
    ballad: [
      "임재현 - 사랑에 연습이 있었다면",
      "임재현 - 조금 취했어",
      "임재현 - 고백하는 취한밤에",
      "임재현 - 세상에 없는 계절",
      "임재현 - 다음생이 있다면 당신을 만나서 다시 사랑할래요",
      "21학번 - 스티커사진",
      "21학번 - 코인 노래방",
      "박재정 - 헤어지자 말해요",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
    ],
    dance: [
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
    ],
    rap_hiphop: [
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
    ],
    idol: [
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
    ],
    RnB_soul: [
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
    ],
    pop: [
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
      "가수 - 제목",
    ],
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
