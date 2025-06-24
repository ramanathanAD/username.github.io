const colors = [
  "#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1",
  "#955251", "#B565A7", "#009B77", "#DD4124", "#D65076",
  "#45B8AC", "#EFC050", "#5B5EA6", "#9B2335", "#DFCFBE"
];

const container = document.getElementById("palette-container");

colors.forEach(color => {
  const box = document.createElement("div");
  box.className = "color-box";
  box.style.backgroundColor = color;
  box.innerText = color;

  box.addEventListener("click", () => {
    navigator.clipboard.writeText(color);
    box.innerText = "Copied!";
    setTimeout(() => {
      box.innerText = color;
    }, 1000);
  });

  container.appendChild(box);
});
