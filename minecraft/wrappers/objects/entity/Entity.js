register("command", () => {
  const ent = new Entity(Player.getPlayer());
  console.log(`Entity: ${ent.getName()}`);
  console.log(`UUID: ${ent.getUUID()}`);
  console.log(`Width: ${ent.getWidth()}`);
}).setName("entitytest");
