let toggle = false;

register("attackEntity", (entity, event) => {
  if (!toggle) return;
  console.log(entity.toString());
  console.log("attackEntity triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("attackentitytest");
