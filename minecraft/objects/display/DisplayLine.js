const displayLine = new DisplayLine("displayLine")
  .setBackground("full")
  .setBackgroundColor(Renderer.DARK_AQUA)
  .setAlign("center")
  .setShadow(true)
  .setTextColor(Renderer.YELLOW)
  .setScale(2);

const display = new Display().setShouldRender(false).setMinWidth(100);

let clicked = false;
displayLine.registerClicked((mx, my, btn, pressed) => {
  clicked = pressed;
  ChatLib.chat("clicked");
});

displayLine.registerHovered((mx, my) => {
  displayLine.setBackgroundColor(Renderer.DARK_RED);
});

displayLine.registerMouseLeave((mx, my) => {
  displayLine.setBackgroundColor(Renderer.DARK_AQUA);
});

displayLine.registerDragged((dx, dy, mx, my) => {
  if (!clicked) return;

  display.setRenderLoc(display.getRenderX() + dx, display.getRenderY() + dy);
});

display.addLine(displayLine);

register("command", () => {
  display.setShouldRender(!display.getShouldRender());
}).setName("displaylinetest");
