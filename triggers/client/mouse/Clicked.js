let toggle = false;

register("clicked", () => {
  if (!toggle) return;
  console.log("clicked triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("clickedtest");
