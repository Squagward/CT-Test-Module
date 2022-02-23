let toggled = false;
const img = new Image("money cat.jpeg", "https://i.imgur.com/AD3MbBi.jpeg");
register("renderOverlay", () => {
  if (!toggled) return;
  Renderer.drawShape(Renderer.DARK_PURPLE, [100, 100], [200, 100], [150, 200]);
  Renderer.drawLine(Renderer.AQUA, 200, 0, 300, 100, 2);
  Renderer.drawCircle(Renderer.RED, 400, 200, 50, 30);
  Renderer.drawString("Renderer String", 300, 200);
  Renderer.drawStringWithShadow("Renderer String With Shadow", 300, 250);
  Tessellator.pushMatrix();
  Renderer.scale(30, 20);
  Renderer.drawPlayer(Player.getPlayer(), 10, 10);
  Tessellator.popMatrix();
  Renderer.drawImage(img, 300, 0, 100, 100);
});

register("command", () => {
  toggled = !toggled;
}).setName("renderertest");
