"use strict";

{
  const imgs = document.getElementsByClassName("main-visual");

  let num = 2;

  function slideshow_timer() {
    if (num === 2) {
      num = 0;
      imgs[num].classList.remove("disabled");
      imgs[2].classList.add("disabled");
    } else {
      num++;
      imgs[num].classList.remove("disabled");
      imgs[num - 1].classList.add("disabled");
    }
  }

  window.setInterval(slideshow_timer, 6000);
}
