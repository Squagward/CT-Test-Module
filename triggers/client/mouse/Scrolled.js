let toggle = false;

register("scrolled", () => {
  if (!toggle) return;
  console.log("scrolled triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("scrolledtest");
