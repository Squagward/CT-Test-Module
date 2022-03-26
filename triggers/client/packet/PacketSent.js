let toggle = false;

register("packetSent", () => {
  if (!toggle) return;
  console.log("packetSent triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("packetsenttest");
