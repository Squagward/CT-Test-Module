let toggle = false;

register("guiRender", () => {
  if (!toggle) return;
  console.log("guiRender triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("guirendertest");
