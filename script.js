const shareButton = document.getElementById("shareButton");
const popup = document.getElementById("shareBox");

shareButton.addEventListener("click", function () {
  popup.classList.toggle("hidden");
});
