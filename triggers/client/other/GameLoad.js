let toggle = false;

register("gameLoad", () => {
  if (!toggle) return;
  console.log("gameLoad triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("gameloadtest");
