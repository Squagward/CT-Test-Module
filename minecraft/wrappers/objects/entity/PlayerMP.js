let toggle = false;

register("renderOverlay", () => {
  if (!toggle) return;

  Tessellator.pushMatrix();
  Renderer.translate(100, 100);
  Renderer.scale(30);
  Player.asPlayerMP().draw(0, 0);
  Tessellator.popMatrix();
});

register("command", () => {
  toggle = !toggle;

  const pmp = Player.asPlayerMP();
  console.log(`PlayerMP: ${pmp.getName()}`);
  console.log(`Display name: ${pmp.getDisplayName()}`);
  pmp.setTabDisplayName(new TextComponent("Test"));
}).setName("playermptest");
