let toggle = false;

register("worldLoad", () => {
  const player = Player.getPlayer();
  ChatLib.chat(`Welcome ${player.getName()}`);

  const uuidVersion = Player.getUUIDObj().version();
  console.log(`UUID Version: ${uuidVersion}`);
  console.log(`Biome: ${Player.getBiome()}`);
  console.log(`Facing: ${Player.facing()}`);
});

register("command", () => {
  toggle = !toggle;

  console.log(`Looking At: ${Player.lookingAt()}`);
  console.log(`Holding: ${Player.getHeldItem()}`);
  Player.setHeldItemIndex(0);
  console.log(`Display Name: ${Player.getDisplayName().getText()}`);
  Player.setTabDisplayName(new TextComponent("Test module user"));
  Player.asPlayerMP().setNametagName(new TextComponent("Test module user"));

  const container = Player.getContainer();
  console.log(`Container: ${container}`);
  const inventory = Player.getInventory();
  console.log(`Inventory: ${inventory}`);

  console.log(`Helmet: ${Player.armor.getHelmet()}`);
}).setName("playertest");

register("renderOverlay", () => {
  if (!toggle) return;
  Tessellator.pushMatrix();
  Renderer.translate(100, 100);
  Renderer.scale(30, 30);
  Player.draw(0, 0, true, true, true, true, true, true);
  Tessellator.popMatrix();
});
