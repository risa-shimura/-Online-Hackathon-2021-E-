"use strict";

{
  // !!!デバック用　Rキーを押すことでリダイレクト
  document.body.addEventListener("keydown", (event) => {
    if (event.key === "r") {
      location.href = location.href;
    }
  });
  // WebSocket
  var sock = new WebSocket("ws://127.0.0.1:5001");

  sock.addEventListener("open", function (e) {
    console.log("Socket 接続成功");
  });

  sock.onmessage = (event) => {
    let data = JSON.parse(event.data);

    if (data.userId === 1) {
      user1.style.top = `${data.y}px`;
      user1.style.left = `${data.x}px`;
      user1.style.zIndex = `${data.zIndex}`;
      user1Name.textContent = data.name;
    }
    if (data.userId === 2) {
      user2.style.top = `${data.y}px`;
      user2.style.left = `${data.x}px`;
      user2.style.zIndex = `${data.zIndex}`;
      user2Name.textContent = data.name;
    }
    if (data.userId === 3) {
      user3.style.top = `${data.y}px`;
      user3.style.left = `${data.x}px`;
      user3.style.zIndex = `${data.zIndex}`;
      user3Name.textContent = data.name;
    }
    if (data.userId === 4) {
      user4.style.top = `${data.y}px`;
      user4.style.left = `${data.x}px`;
      user4.style.zIndex = `${data.zIndex}`;
      user4Name.textContent = data.name;
    }
    if (data.userId === 5) {
      user5.style.top = `${data.y}px`;
      user5.style.left = `${data.x}px`;
      user5.style.zIndex = `${data.zIndex}`;
      user5Name.textContent = data.name;
    }
    if (data.userId === 6) {
      user6.style.top = `${data.y}px`;
      user6.style.left = `${data.x}px`;
      user6.style.zIndex = `${data.zIndex}`;
      user6Name.textContent = data.name;
    }
    if (data.userId === 7) {
      user7.style.top = `${data.y}px`;
      user7.style.left = `${data.x}px`;
      user7.style.zIndex = `${data.zIndex}`;
      user7Name.textContent = data.name;
    }
    if (data.userId === 8) {
      user8.style.top = `${data.y}px`;
      user8.style.left = `${data.x}px`;
      user8.style.zIndex = `${data.zIndex}`;
      user8Name.textContent = data.name;
    }
    if (data.userId === 9) {
      user9.style.top = `${data.y}px`;
      user9.style.left = `${data.x}px`;
      user9.style.zIndex = `${data.zIndex}`;
      user9Name.textContent = data.name;
    }
    if (data.userId === 10) {
      user10.style.top = `${data.y}px`;
      user10.style.left = `${data.x}px`;
      user10.style.zIndex = `${data.zIndex}`;
      user10Name.textContent = data.name;
    }
  };

  // 本文
  const details = Array.from(document.getElementsByClassName("store-detail"));

  const detail1 = document.getElementById("detail1");
  const detail2 = document.getElementById("detail2");
  const detail3 = document.getElementById("detail3");
  const detail4 = document.getElementById("detail4");
  const detail5 = document.getElementById("detail5");
  const detail6 = document.getElementById("detail6");
  const detail7 = document.getElementById("detail7");
  const detail8 = document.getElementById("detail8");
  const detail9 = document.getElementById("detail9");
  const detail10 = document.getElementById("detail10");
  const detail11 = document.getElementById("detail11");
  const detail12 = document.getElementById("detail12");
  const detail13 = document.getElementById("detail13");
  const detail14 = document.getElementById("detail14");

  // キャラクターの定義
  let user1 = document.getElementById("user1");
  let user2 = document.getElementById("user2");
  let user3 = document.getElementById("user3");
  let user4 = document.getElementById("user4");
  let user5 = document.getElementById("user5");
  let user6 = document.getElementById("user6");
  let user7 = document.getElementById("user7");
  let user8 = document.getElementById("user8");
  let user9 = document.getElementById("user9");
  let user10 = document.getElementById("user10");

  const user1Name = document.getElementById("user1-name");
  const user2Name = document.getElementById("user2-name");
  const user3Name = document.getElementById("user3-name");
  const user4Name = document.getElementById("user4-name");
  const user5Name = document.getElementById("user5-name");
  const user6Name = document.getElementById("user6-name");
  const user7Name = document.getElementById("user7-name");
  const user8Name = document.getElementById("user8-name");
  const user9Name = document.getElementById("user9-name");
  const user10Name = document.getElementById("user10-name");

  let isMovable = false;

  // ユーザー名とidをランダムに振り分ける(仮)
  const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const myUserId = userIds[Math.floor(Math.random() * userIds.length)];

  const myUserName = "ユーザー" + myUserId;

  let myCharacter;

  (() => {
    if (myUserId === 1) {
      myCharacter = user1;
      user1Name.textContent = myUserName;
    }
    if (myUserId === 2) {
      myCharacter = user2;
      user2Name.textContent = myUserName;
    }
    if (myUserId === 3) {
      myCharacter = user3;
      user3Name.textContent = myUserName;
    }
    if (myUserId === 4) {
      myCharacter = user4;
      user4Name.textContent = myUserName;
    }
    if (myUserId === 5) {
      myCharacter = user5;
      user5Name.textContent = myUserName;
    }
    if (myUserId === 6) {
      myCharacter = user6;
      user6Name.textContent = myUserName;
    }
    if (myUserId === 7) {
      myCharacter = user7;
      user7Name.textContent = myUserName;
    }
    if (myUserId === 8) {
      myCharacter = user8;
      user8Name.textContent = myUserName;
    }
    if (myUserId === 9) {
      myCharacter = user9;
      user9Name.textContent = myUserName;
    }
    if (myUserId === 10) {
      myCharacter = user10;
      user10Name.textContent = myUserName;
    }
    console.log(myCharacter);
  })();

  // キーを押すことで移動
  const character = {
    x: 0,
    y: 0,
    zIndex: 100,
  };

  document.body.addEventListener("keydown", (event) => {
    event.preventDefault();

    if (!isMovable) {
      return;
    }

    const key = event.key;

    if (key === "ArrowLeft" || key === "a") {
      if (character.x <= 0) {
        return;
      }
      character.x -= 100;
      checkClass();
      changeMusicVolume();
      if (character.x < 6500) {
        scrollBy(-100, 0);
      }
    }
    if (key === "ArrowUp" || key === "w") {
      if (character.y <= -150) {
        return;
      }
      character.y -= 50;
      character.zIndex -= 1;
      scrollBy(0, -50);
      checkClassY();
    }
    if (key === "ArrowRight" || key === "d") {
      if (character.x >= 7000) {
        return;
      }
      character.x += 100;
      checkClass();
      changeMusicVolume();
      if (character.x > 600) {
        scrollBy(100, 0);
      }
    }
    if (key === "ArrowDown" || key === "s") {
      if (character.y >= 0) {
        return;
      }
      character.y += 50;
      character.zIndex += 1;
      scrollBy(0, 50);
      checkClassY();
    }

    myCharacter.style.top = `${character.y}px`;
    myCharacter.style.left = `${character.x}px`;
    myCharacter.style.zIndex = character.zIndex;
    console.log(character.x);
    console.log(character.y);
  });

  // １秒前の座標と比較して座標が変化していたらサーバーに送る

  let lastCoordinateX;
  let lastCoordinateY;
  setInterval(() => {
    if (lastCoordinateX === character.x && lastCoordinateY === character.y) {
      return;
    } else {
      sock.send(
        JSON.stringify({
          name: myUserName,
          userId: myUserId,
          x: character.x,
          y: character.y,
          zIndex: character.zIndex,
        })
      );
    }
    lastCoordinateX = character.x;
    lastCoordinateY = character.y;
  }, 1000);

  // detailに対するクラスの操作

  function checkClass() {
    if (character.x === 300) {
      detail1.classList.add("disabled");
    }

    if (character.x === 400 || character.x === 700) {
      detail1.classList.remove("disabled");
      detail2.classList.add("disabled");
    }

    if (character.x === 800 || character.x === 1100) {
      detail2.classList.remove("disabled");
      detail1.classList.add("disabled");
      detail3.classList.add("disabled");
    }

    if (character.x === 1200 || character.x === 1500) {
      detail3.classList.remove("disabled");
      detail2.classList.add("disabled");
      detail4.classList.add("disabled");
    }

    if (character.x === 1600 || character.x === 1900) {
      detail4.classList.remove("disabled");
      detail3.classList.add("disabled");
      detail5.classList.add("disabled");
    }

    if (character.x === 2000 || character.x === 2300) {
      detail5.classList.remove("disabled");
      detail4.classList.add("disabled");
      detail6.classList.add("disabled");
    }

    if (character.x === 2400 || character.x === 2700) {
      detail6.classList.remove("disabled");
      detail5.classList.add("disabled");
      detail7.classList.add("disabled");
    }

    if (character.x === 2800 || character.x === 3100) {
      detail7.classList.remove("disabled");
      detail6.classList.add("disabled");
    }

    if (character.x === 3200) {
      detail7.classList.add("disabled");
    }

    // 盆踊り ココ

    if (character.x === 3900) {
      detail8.classList.add("disabled");
    }

    if (character.x === 4000 || character.x === 4300) {
      detail8.classList.remove("disabled");
      detail9.classList.add("disabled");
    }

    if (character.x === 4400 || character.x === 4700) {
      detail9.classList.remove("disabled");
      detail8.classList.add("disabled");
      detail10.classList.add("disabled");
    }

    if (character.x === 4800 || character.x === 5100) {
      detail10.classList.remove("disabled");
      detail9.classList.add("disabled");
      detail11.classList.add("disabled");
    }

    if (character.x === 5200 || character.x === 5500) {
      detail11.classList.remove("disabled");
      detail10.classList.add("disabled");
      detail12.classList.add("disabled");
    }

    if (character.x === 5600 || character.x === 5900) {
      detail12.classList.remove("disabled");
      detail11.classList.add("disabled");
      detail13.classList.add("disabled");
    }

    if (character.x === 6000 || character.x === 6300) {
      detail13.classList.remove("disabled");
      detail12.classList.add("disabled");
      detail14.classList.add("disabled");
    }

    if (character.x === 6400 || character.x === 6700) {
      detail14.classList.remove("disabled");
      detail13.classList.add("disabled");
    }

    if (character.x === 6800) {
      detail14.classList.add("disabled");
    }
  }

  function checkClassY() {
    if (character.y === -150) {
      details.forEach((detail) => {
        detail.classList.remove("disabledY");
      });
    }
    if (character.y === -100) {
      details.forEach((detail) => {
        detail.classList.add("disabledY");
      });
    }
  }

  // モーダルウインドウ

  const close = document.getElementById("close");
  const modal = document.getElementById("modal");
  const mask = document.getElementById("mask");

  close.addEventListener("click", () => {
    modal.classList.add("disabled");
    mask.classList.add("disabled");
    noise.play();
    music.play();
    isMovable = true;
  });

  mask.addEventListener("click", () => {
    close.click();
  });

  // 音楽関連
  const noise = new Audio("../audio/noise.mp3");
  const music = new Audio("../audio/matsuri-music.mp3");
  noise.loop = true;
  music.loop = true;
  noise.volume = 0.8;
  music.volume = 0;
  console.log(music.volume);

  // 盆踊りに近づくほど音がでかくなる
  function changeMusicVolume() {
    if (character.x >= 1000 && character.x <= 3200) {
      music.volume = (character.x - 1000) / 2200;
    }
    if (character.x <= 6200 && character.x >= 4000) {
      music.volume = 1 - (character.x - 4000) / 2200;
    }
  }

  // 読み込み直後
  // 画面を下部にスクロールして、マウスウィールによるスクロールを禁止
  window.scrollTo({
    top: 300,
    left: 0,
  });
  document.addEventListener(
    "mousewheel",
    (mousewheel) => {
      mousewheel.preventDefault();
    },
    { passive: false }
  );
}
