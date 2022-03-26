let toggle = false;

register("guiDrawBackground", () => {
  if (!toggle) return;
  console.log("guiDrawBackground triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("guidrawbackgroundtest");
