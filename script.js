
document.getElementById("toggle-mode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

document.querySelectorAll("header nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
