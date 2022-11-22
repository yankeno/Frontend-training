window.onload = () => {
  let nav = document.getElementById("nav-wrapper");
  let hamburger = document.getElementById("hamburger");
  let bgBlack = document.getElementById("bg-black");

  // アイコンクリックでハンバーがメニューを開閉
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // 背景クリックでハンバーガーメニューを閉じる
  bgBlack.addEventListener("click", () => {
    nav.classList.remove("open");
  });
};
