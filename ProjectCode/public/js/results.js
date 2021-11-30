
const card1 = document.getElementById("0");
const card2 = document.getElementById("1");
const card3 = document.getElementById("2");
const link1 = document.getElementById("link-0").value;
const link2 = document.getElementById("link-1").value;
const link3 = document.getElementById("link-2").value;
const btn1 = document.getElementById("btn-0");
const btn2 = document.getElementById("btn-1");
const btn3 = document.getElementById("btn-2");

card1.addEventListener("click", function (e) {
  card1.classList.add('is-flipped');
});

card2.addEventListener("click", function (e) {
    card2.classList.add('is-flipped');
  });
  
card3.addEventListener("click", function (e) {
  card3.classList.add('is-flipped');
});

btn1.addEventListener("click", function () {
    window.open(link1, '_blank').focus();
});
btn2.addEventListener("click", function () {
    window.open(link2, '_blank').focus();
});
btn3.addEventListener("click", function () {
    window.open(link3, '_blank').focus();
});



