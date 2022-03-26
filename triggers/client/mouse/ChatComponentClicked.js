let toggle = false;

register("chatComponentClicked", () => {
  if (!toggle) return;
  console.log("chatComponentClicked triggered");
});

register("command", () => {
  toggle = !toggle;
}).setName("chatcomponentclickedtest");
