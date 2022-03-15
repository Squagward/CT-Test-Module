register("command", () => {
    const inv = Player.getInventory();

    console.log(`1st hotbar slot: ${inv.getStackInSlot(0)}`);
    console.log(`Index of boots: ${inv.indexOf(new Item("minecraft:diamond_boots"))}`);
    console.assert(!inv.isContainer(), "Inventory should not be a container");
    console.log(`Inventory name: ${inv.getName()}`);
    console.log(`Inventory size: ${inv.getSize()}`);
}).setName("inventorytest");