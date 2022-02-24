const speedyF1 = new Sound({
  source: "f1 theme.ogg",
  category: "RECORDS",
  stream: true,
  x: 0,
  y: 55,
  z: 0,
  volume: 1,
  pitch: 10,
  priority: true,
  loop: true,
});

register("command", (arg) => {
  speedyF1.setPosition(0, 55, 0);
  switch (arg) {
    case "play":
      speedyF1.play();
      break;
    case "pause":
      speedyF1.pause();
      break;
    case "stop":
      speedyF1.stop();
      break;
    case "rewind":
      speedyF1.rewind();
      break;
  }
}).setName("soundtest");
