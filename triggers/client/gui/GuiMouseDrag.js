let toggle = false;

register("guiMouseDrag", () => {
  if (!toggle) return;
  console.log("guiMouseDrag triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("guimousedragtest");
