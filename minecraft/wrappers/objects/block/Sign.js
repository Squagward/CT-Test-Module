register("command", () => {
  const block = Player.lookingAt();
  if (!(block instanceof Sign)) return;

  console.log("Sign text:");
  block.getFormattedLines().forEach((l) => console.log(l));
}).setName("signtest");
