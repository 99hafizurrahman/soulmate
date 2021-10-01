let i;
let rank = [];
for (i = 0; i < 2; i++) {
  let randomNumber1 = Math.floor(Math.random() * 21);
  rank.push(randomNumber1);
  let setImgSource = document.querySelectorAll('img');
  let imageSourse = 'images/boy (' + randomNumber1 + ').jpg';
  setImgSource[i].setAttribute('src', imageSourse);
}

let button = document.querySelector('button');

let result = document.querySelector('.match');

if (rank[0] === rank[1]) {
  result.innerHTML = 'You Choose Yourself! 😎';
} else if (rank[0] > 10 && rank[1] > 10) {
  result.innerHTML = "It's a Bestie match! 👩‍❤️‍💋‍👩";
} else if (rank[0] < 11 && rank[1] < 11) {
  result.innerHTML = 'I got friend! 👨‍❤️‍👨';
} else {
  result.innerHTML = 'Congrats..🎉 you got match! 👫';
}
button.addEventListener('click', function (e) {
  location.reload();
});
