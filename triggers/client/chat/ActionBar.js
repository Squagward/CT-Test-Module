let toggle = false;

register("actionBar", () => {
  if (!toggle) return;
  console.log("actionBar triggered");
}).setCriteria("ActionBar!");

register("command", () => {
  toggle = !toggle;
  new Message("ActionBar!").setRecursive(true).actionBar();
}).setName("actionbartest");
