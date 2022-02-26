register("command", (arg) => {
  if (arg === "start") {
    World.playSound("records.chirp", 1, 1);
  } else if (arg === "stop") {
    World.playSound("null", 1, 1);
  } else {
    World.playSound("dig.wood", 1, 1);
    const block = World.getBlockAt(
      Player.getX(),
      Player.getY() - 1,
      Player.getZ()
    );
    console.log(`Standing on ${(block?.getType() ?? block).getName()}`);
    console.log(`${World.getAllEntities().length} entities`);
    console.log(
      `${
        World.getAllEntitiesOfType(net.minecraft.entity.item.EntityFallingBlock)
          .length
      } falling blocks`
    );
    console.log(`${World.getAllTileEntities().length} tile entities`);
    console.log(`${World.getAllPlayers().length} players`);
    console.log(`World border size: ${World.border.getSize()}`);
    console.log(
      `World spawn location: ${World.spawn.getX()} ${World.spawn.getY()} ${World.spawn.getZ()}`
    );

    World.particle.spawnParticle(
      "EXPLOSION_HUGE",
      Player.getX(),
      Player.getY(),
      Player.getZ(),
      0,
      1,
      0
    );
  }
}).setName("worldtest");
