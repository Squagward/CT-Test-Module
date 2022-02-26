let toggle = false;

register("command", () => {
  toggle = !toggle;

  World.getAllTileEntities().forEach((tileEntity) => {
    console.log(
      `${tileEntity.getBlockType().getName()} at ${tileEntity.getBlockPos()}`
    );
  });
}).setName("tileentitytest");

register("renderTileEntity", (tileEntity, pos, pt, event) => {
  if (!toggle) return;

  if (
    tileEntity.tileEntity instanceof
      net.minecraft.tileentity.TileEntityBanner ||
    tileEntity.tileEntity instanceof net.minecraft.tileentity.TileEntityBeacon
  ) {
    cancel(event);
  }
});
