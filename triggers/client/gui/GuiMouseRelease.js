let toggle = false;

register("guiMouseRelease", () => {
  if (!toggle) return;
  console.log("guiMouseRelease triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("guimousereleasetest");
