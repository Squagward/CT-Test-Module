register("command", () => {
  const chunk = Player.asPlayerMP().getChunk();
  console.log(`Chunk at ${chunk.getX()} ${chunk.getZ()}`);
  console.log(
    `Chunk min coords at ${chunk.getMinBlockX()} ${chunk.getMinBlockZ()}`
  );
  console.log(
    `Skylight at player: ${chunk.getSkyLightLevel(
      Player.getX(),
      Player.getY(),
      Player.getZ()
    )}`
  );
  console.log(
    `Block light at player: ${chunk.getBlockLightLevel(
      Player.getX(),
      Player.getY(),
      Player.getZ()
    )}`
  );
  console.log(`Chunk contains ${chunk.getAllEntities().length} entities`);
  console.log(
    `Chunk contains ${
      chunk.getAllEntitiesOfType(net.minecraft.entity.item.EntityFallingBlock)
        .length
    } falling blocks`
  );
}).setName("chunktest");
