let toggle = false;

register("guiKey", () => {
  if (!toggle) return;
  console.log("guiKey triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("guikeytest");
