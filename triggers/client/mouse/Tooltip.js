let toggle = false;

register("itemTooltip", () => {
  if (!toggle) return;
  console.log("itemTooltip triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("itemtooltiptest");
