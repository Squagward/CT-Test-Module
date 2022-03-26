let toggle = false;

register("messageSent", (msg) => {
  if (!toggle) return;
  console.log(msg);
});

register("command", () => {
  toggle = !toggle;
}).setName("messagesenttest");
