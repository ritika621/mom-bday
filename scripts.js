document.addEventListener("DOMContentLoaded", function () {
  const askBtn = document.getElementById("ask-btn");
  const response = document.getElementById("response");

  if (askBtn && response) {
    askBtn.addEventListener("click", function () {
      askBtn.classList.add("hidden");
      response.classList.remove("hidden");
      response.style.animation = "fadeIn 2s ease-in-out";
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.getElementById("yes-btn");
  const definitelyYesBtn = document.getElementById("definitely-yes-btn");
  const response = document.getElementById("response");

  if (yesBtn && definitelyYesBtn && response) {
    yesBtn.addEventListener("click", function () {
      yesBtn.classList.add("hidden");
      definitelyYesBtn.classList.add("hidden");
      response.classList.remove("hidden");
      response.style.animation = "fadeIn 2s ease-in-out";
    });

    definitelyYesBtn.addEventListener("click", function () {
      yesBtn.classList.add("hidden");
      definitelyYesBtn.classList.add("hidden");
      response.classList.remove("hidden");
      response.style.animation = "fadeIn 2s ease-in-out";
    });
  }
});

function goToNextPage1() {
  window.location.href = "page-one.html";
}

function goToNextPage() {
  window.location.href = "gallery.html";
}
