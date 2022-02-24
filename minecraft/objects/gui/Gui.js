const GuiButton = Java.type("net.minecraft.client.gui.GuiButton");

const text = new Text("wow there!", 0, 0);

const gui = new Gui();

gui.addButton(123, 0, 200, 200, 20, "Reset Text");
gui.addButton(new GuiButton(456, 100, 100, 20, 20, "clear the buttons"));
gui.addButton(789, 200, 200, 200, 20, "remove me!");

gui.registerActionPerformed((id) => {
  switch (id) {
    case 123:
      text.setString("");
      break;
    case 456:
      gui.clearButtons();
      break;
    case 789:
      gui.removeButton(789);
      break;
  }
});

gui.registerDraw((mouseX, mouseY) => {
  gui.drawString("drawString()", 100, 0, Renderer.AQUA);
  gui.drawHoveringString(["text 1", "text 2"], 100, 50);
  gui.drawCreativeTabHoveringString("creative tab hover", mouseX, mouseY);
  text.draw();
});

gui.registerKeyTyped((typed, key) => {
  text.setString(text.getString() + typed);
});

gui.registerScrolled((mouseX, mouseY, scroll) => {
  text.setY(text.getY() + scroll);
});

gui.registerClicked((mouseX, mouseY, button) => {
  text.setColor(Renderer.RED);
});

gui.registerMouseDragged((mouseX, mouseY, button) => {
  text.setX(mouseX);
  text.setY(mouseY);
});

gui.registerMouseReleased((mouseX, mouseY, button) => {
  text.setColor(Renderer.BLACK);
});

register("command", () => {
  gui.open();
}).setName("guitest");
