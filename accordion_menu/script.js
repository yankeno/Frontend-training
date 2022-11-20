const list = document.getElementById("accordion").children;
const removeOthersElmOpenClass = (index) => {
  // open を付与した要素以外は open を削除
  for (let j = 0; j < list.length; j++) {
    if (j !== index) {
      list[j].classList.remove("open");
    }
  }
};
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    list[i].classList.toggle("open");
    removeOthersElmOpenClass(i);
  });
}
