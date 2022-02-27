register("command", () => {
  const block = World.getBlockAt(9, 56, 4);
  console.log(`Block ID: ${block.type.getID()}, Name: ${block.type.getName()}`);
  console.log(`at ${block.x}, ${block.y}, ${block.z}`);
  console.log(`${block.canBeHarvested() ? "can" : "cannot"}`, "be harvested");
}).setName("blocktest");
