const author = document.querySelector(".author");
const shareActive = document.querySelector(".share-container");
const shareBtn1 = document.querySelector(".share");
const shareBtn2 = document.querySelector(".share--2");

shareBtn1.addEventListener("click", function () {
  if (shareActive.classList.contains("not-displayed")) {
    shareActive.classList.remove("not-displayed");
  } else {
    shareActive.classList.add("not-displayed");
  }
});
shareBtn2.addEventListener("click", function () {
  shareActive.classList.add("not-displayed");
});
