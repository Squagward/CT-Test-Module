let toggle = false;

register("packetReceived", () => {
  if (!toggle) return;
  console.log("packetReceived triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("packetreceivedtest");
