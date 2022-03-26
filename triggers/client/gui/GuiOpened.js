let toggle = false;

register("guiOpened", () => {
  if (!toggle) return;
  console.log("guiOpened triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("guiopenedtest");
