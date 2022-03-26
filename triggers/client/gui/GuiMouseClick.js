let toggle = false;

register("guiMouseClick", () => {
  if (!toggle) return;
  console.log("guiMouseClick triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("guimouseclicktest");
