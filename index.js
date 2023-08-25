const colorSelect = document.getElementById("colorSelect");
const bgColorSelect = document.getElementById("bgColorSelect");
const paddingSelect = document.getElementById("paddingSelect");
const fontSizeSelect = document.getElementById("fontSizeSelect");
const fontWeightSelect = document.getElementById("fontWeightSelect");
const targetDiv = document.getElementById("targetDiv");

colorSelect.addEventListener("change", () => {
  targetDiv.style.color = colorSelect.value;
});

bgColorSelect.addEventListener("change", () => {
  targetDiv.style.backgroundColor = bgColorSelect.value;
});

paddingSelect.addEventListener("change", () => {
  targetDiv.style.padding = paddingSelect.value;
});

fontSizeSelect.addEventListener("change", () => {
  targetDiv.style.fontSize = fontSizeSelect.value;
});

fontWeightSelect.addEventListener("change", () => {
  targetDiv.style.fontWeight = fontWeightSelect.value;
});
