const display = new Display({
  align: DisplayHandler.Align.CENTER,
  background: DisplayHandler.Background.FULL,
  backgroundColor: Renderer.BLACK,
  order: DisplayHandler.Order.UP,
  renderX: 125,
  renderY: 100.25,
  textColor: Renderer.WHITE,
  shouldRender: false,
  minWidth: 0,
});

display.addLine("Line 1!");
display.setLine(1, "Line 2!");
display.addLines(
  "Line 3!",
  new DisplayLine("&lLine 4!").setTextColor(Renderer.RED),
  "&lLine 5! yay"
);

const display2 = new Display()
  .setBackground("full")
  .setBackgroundColor(Renderer.GREEN)
  .setRenderLoc(250, 100)
  .setShouldRender(false);

display2.addLine("Line 1!");
display2.setLine(1, "Line 2!");
display2
  .addLines(
    "Line 3!",
    new DisplayLine("&lLine 4!").setTextColor(Renderer.RED),
    "&lLine 5! yay"
  )
  .setLine(10, "line 10 lol");

register("command", () => {
  display.setShouldRender(!display.getShouldRender());
  display2.setShouldRender(!display2.getShouldRender());
}).setName("displaytest");

register("step", (steps) => {
  display2.addLine(`new line ${steps}`);
})
  .setFps(1)
  .setPriority(Priority.LOWEST);

register("step", () => {
  display2.clearLines();
}).setDelay(10);
