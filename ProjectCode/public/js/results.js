
const card1 = document.getElementById("0");
const card2 = document.getElementById("1");
const card3 = document.getElementById("2");
const link1 = document.getElementById("link-0").value;
const link2 = document.getElementById("link-1").value;
const link3 = document.getElementById("link-2").value;
const btn1 = document.getElementById("btn-0");
const btn2 = document.getElementById("btn-1");
const btn3 = document.getElementById("btn-2");
const score1 = document.getElementById("score-0");
const score2 = document.getElementById("score-1");
const score3 = document.getElementById("score-2");

card1.addEventListener("click", function (e) {
  card1.classList.add('is-flipped');
  setTimeout(function() {
    animateValue(score1, 0, Number(score1.getAttribute("name")), 800); 
    }, 1000)
  });


card2.addEventListener("click", function (e) {
    card2.classList.add('is-flipped');
    setTimeout(function() {
      animateValue(score2, 0, Number(score2.getAttribute("name")), 800); 
      }, 1000)
  });
  
card3.addEventListener("click", function (e) {
  card3.classList.add('is-flipped');
  setTimeout(function() {
    animateValue(score3, 0, Number(score3.getAttribute("name")), 800); 
    }, 1000)
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

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start) + "% Match";
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);

}







