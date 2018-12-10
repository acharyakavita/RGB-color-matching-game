var r;
var g;
var b;
var num = 6;
var colors = [];
var colorHdr = document.querySelector("span");
var hdrRow = document.querySelector(".header1");
var squares = document.querySelectorAll(".square");
var easyMode = document.getElementById("easy");
var hardMode = document.getElementById("hard");
var reset = document.getElementById("reset");
var msg = document.getElementById("temp");

generateColors(num);
var dispHdr = pickColor();
colorHdr.textContent = dispHdr;

easyMode.addEventListener("click", function() {
  num = 3;
  generateColors(num);
  dispHdr = pickColor();
  colorHdr.textContent = dispHdr;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.background = "#232323";
    }
  }
});
hardMode.addEventListener("click", function() {
  num = 6;
  generateColors(num);
  dispHdr = pickColor();
  colorHdr.textContent = dispHdr;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
});
reset.addEventListener("click", function() {
  temp.textContent = "Keep Guessing";
  hdrRow.style.background = "steelblue";
  this.classList.add("selected");
  temp.classList.add("selected");
  num = 6;
  colors = [];
  generateColors(num);
  dispHdr = pickColor();
  colorHdr.textContent = dispHdr;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
});

function generateColors(num) {
  colors = [];
  for (i = 0; i < num; i++) {
    colors[i] = randomColor();
  }
}

function randomColor() {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

for (var i = 0; i < num; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function() {
    if (this.style.background === dispHdr) {
      hdrRow.style.background = dispHdr;
      msg.textContent = "Correct!";
      msg.classList.add("selected");
      for (var j = 0; j < num; j++) {
        squares[j].style.background = dispHdr;
      }
    } else {
      this.style.background = "#232323";
      msg.textContent = "Try Again";
      msg.classList.add("selected");
    }
  });
}