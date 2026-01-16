let isVisible = false; // Track visibility state

document.getElementById("showPunchline").addEventListener("click", function() {

  // Change HTML
  document.getElementById("Placeholder").classList.remove("hidden");

  document.body.style.backgroundColor = "#ffe4b5";

  document.getElementById("Placeholder").src = "Placeholder.png";

  const Placeholder = document.getElementById("Placeholder");
  Placeholder.style.transform = "scale(1.5)";
  Placeholder.style.color = "red";

  setTimeout(() => {
    Placeholder.style.transform = "scale(1)";
    Placeholder.style.color = "#2e8b57";
  }, 1500);
