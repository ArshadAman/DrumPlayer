console.log("Script is linked");

window.addEventListener("keydown", function (event) {
  event.preventDefault();

  switch (event.key) {
    case "A":
      Play("A");
      break;

    case "a":
      Play("A");
      break;

    case "S":
      Play("S");
      break;

    case "s":
      Play("S");
      break;

    case "D":
      Play("D");
      break;

    case "d":
      Play("D");
      break;

    case "F":
      Play("F");
      break;

    case "f":
      Play("F");
      break;

    case "G":
      Play("G");
      break;

    case "g":
      Play("G");
      break;

    case "H":
      Play("H");
      break;

    case "h":
      Play("H");
      break;

    case "J":
      Play("J");
      break;

    case "j":
      Play("J");
      break;

    case "K":
      Play("K");
      break;

    case "k":
      Play("K");
      break;

    case "L":
      Play("L");
      break;

    case "l":
      Play("L");
      break;

    default:
      break;
  }
});

function Play(id) {
  let s = document.getElementById(id);
  let audio = "";
  switch (id) {
    case "A":
      audio = new Audio("/Sounds/clap.mp3");
      audio.play();
      setTimeout(function () {
        audio.pause();
      }, 300);
      break;

    case "S":
      audio = new Audio("/Sounds/hihat.mp3");
      audio.play();
      setTimeout(function () {
        audio.pause();
      }, 500);
      break;

    case "D":
      audio = new Audio("/Sounds/kick.mp3");
      audio.play();
      setTimeout(function () {
        audio.pause();
      }, 300);
      break;

    case "F":
      audio = new Audio("/Sounds/openhat.mp3");
      audio.play();
      setTimeout(function () {
        audio.pause();
      }, 600);
      break;

    case "G":
      audio = new Audio("/Sounds/boom.mp3");
      audio.play();
      setTimeout(function () {
        audio.pause();
      }, 400);
      break;

    case "H":
      audio = new Audio("/Sounds/ride.mp3");
      audio.play();
      setTimeout(function () {
        audio.pause();
      }, 300);
      break;

    case "J":
      audio = new Audio("/Sounds/snare.mp3");
      audio.play();
      setTimeout(function () {
        audio.pause();
      }, 300);
      break;

    case "K":
      audio = new Audio("/Sounds/tom.mp3");
      audio.play();
      setTimeout(function () {
        audio.pause();
      }, 300);
      break;

    case "L":
      audio = new Audio("/Sounds/tink.mp3");
      audio.play();
      setTimeout(function () {
        audio.pause();
      }, 300);
      break;

    default:
      break;
  }

  s.click();
  s.classList.add("drums-clicked");

  setTimeout(function () {
    s.classList.remove("drums-clicked");
  }, 200);
}
