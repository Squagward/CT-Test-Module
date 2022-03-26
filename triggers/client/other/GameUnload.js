let toggle = false;

register("gameUnload", () => {
  if (!toggle) return;
  console.log("gameUnload triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("gameunloadtest");
