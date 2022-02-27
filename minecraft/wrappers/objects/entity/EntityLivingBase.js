register("command", () => {
  const ent = new EntityLivingBase(Player.getPlayer());
  console.log(`EntityLivingBase: ${ent.getName()}`);
  console.log(`HP: ${ent.getHP()}`);
  console.log(`Armor value: ${ent.getArmorValue()}`);
}).setName("entitylivingbasetest");
