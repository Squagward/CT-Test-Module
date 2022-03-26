let toggle = false;

register("dragged", () => {
  if (!toggle) return;
  console.log("dragged triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("draggedtest");
