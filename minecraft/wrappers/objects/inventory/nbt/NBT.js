const MCNBTTagList = Java.type("net.minecraft.nbt.NBTTagList");
const MCNBTTagString = Java.type("net.minecraft.nbt.NBTTagString");

register("command", () => {
  const nbt = Player.getHeldItem().getNBT();
  nbt.getTag("tag").getTag("display").set("Name", "thing");
  console.assert(Player.getHeldItem().getName() === "thing");

  if (nbt.getTag("tag").getTag("display").get("Lore") === null) {
    nbt
      .getTag("tag")
      .getTag("display")
      .set("Lore", new NBTTagList(new MCNBTTagList()));
  }
  new NBTTagList(
    nbt.getTag("tag").getTag("display").get("Lore").rawNBT
  ).insertTag(0, new MCNBTTagString("§aaaaawawawfadfds"));
}).setName("nbttest");
