let toggle = false;

register("tick", () => {
  if (!toggle) return;
  console.log("tick triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("ticktest");
