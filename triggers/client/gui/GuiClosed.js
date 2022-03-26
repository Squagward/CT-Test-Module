let toggle = false;

register("guiClosed", () => {
  if (!toggle) return;
  console.log("guiClosed triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("guiclosedtest");
