let toggle = false;

register("step", () => {
  if (!toggle) return;
  console.log("step triggered");
}).setFps(1);

register("command", () => {
  toggle = !toggle;
}).setName("steptest");
