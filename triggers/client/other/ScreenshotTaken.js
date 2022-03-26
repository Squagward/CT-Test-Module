let toggle = false;

register("screenshotTaken", () => {
  if (!toggle) return;
  console.log("screenshotTaken triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("screenshottakentest");
