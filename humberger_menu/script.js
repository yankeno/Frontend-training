window.onload = () => {
  let nav = document.getElementById("nav-wrapper");
  let hamburger = document.getElementById("hamburger");
  let bgBlack = document.getElementById("bg-black");
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  bgBlack.addEventListener("click", () => {
    nav.classList.remove("open");
  });
  console.log(hamburger);
};
