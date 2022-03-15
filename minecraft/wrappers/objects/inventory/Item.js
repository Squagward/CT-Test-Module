const EntityItem = Java.type("net.minecraft.entity.item.EntityItem");

let toggle = false;
let item;

register("renderOverlay", (event) => {
    if (!toggle || item === null) return;

    item.draw(100, 100);
});

register("command", () => {
  item = Player.getHeldItem();
  if (item === null) return;
  toggle = !toggle;

  console.log(`Damage: ${item.getDamage()}`);
  console.log(
    `Enchantments: ${[...(item.getEnchantments()?.entrySet() ?? [])].join(", ")}`
  );

  const item2 = new Item(item.itemStack);
  const item3 = new Item("minecraft:stone");
  const item4 = new Item(12);
  const item5 = new Item(new BlockType(42));
  const item6 = new Item(World.getAllEntities().find((e) => e.entity instanceof EntityItem).entity);
  const item7 = new Item(World.getAllEntities().find((e) => e.entity instanceof EntityItem));

  const items = [
    item,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
  ];

  items.forEach((i, index) => {
      console.log(`Item ${index + 1}: ${i.getName()}`);
  });
}).setName("itemtest");
