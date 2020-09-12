var i;
var rank = [];
for (i = 0; i < 2; i++) {
  var randomNumber1 = Math.floor(Math.random() * 22);
  rank.push(randomNumber1);
  var male = document.querySelectorAll("img");
  var imageSourse = "images/boy (" + randomNumber1 + ").jpg";
  male[i].setAttribute("src", imageSourse);
}

var btn = document.querySelector("button");

var title = document.querySelector(".match");
if (rank[0] === rank[1]) {
  title.innerHTML = "You Choose Yourself! 😎";
} else if (rank[0] > 10 && rank[1] > 10) {
  title.innerHTML = "It's a Lesbo match! 👩‍❤️‍💋‍👩";
} else if (rank[0] < 11 && rank[1] < 11) {
  title.innerHTML = "Its a Gay match! 👨‍❤️‍👨";
} else {
  title.innerHTML = "Congrats..🎉 Its a gf/bf match! 👫";
}
btn.addEventListener("click", function (e) {
  location.reload();
});
