let toggle = false;

register("chatComponentHovered", () => {
  if (!toggle) return;
  console.log("chatComponentHovered triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("chatcomponenthoveredtest");
