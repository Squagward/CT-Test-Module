let toggle = false;

register("chat", () => {
  if (!toggle) return;
  console.log("chat triggered");
}).setCriteria("Chat!");

register("command", () => {
  toggle = !toggle;
  new Message("Chat!").setRecursive(true).chat();
}).setName("chattest");
