document.addEventListener("DOMContentLoaded", function() {
    var score = 0;
    var scoreElement = document.getElementById("scoreValue");
    var imageElement = document.getElementById("image");
  
    imageElement.addEventListener("click", function() {
      score++;
      scoreElement.textContent = score;
      window.location.href = "index2.html"; // Replace with your desired URL
    });
  });