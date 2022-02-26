register("command", () => {
  Player.asPlayerMP()
    .getActivePotionEffects()
    .forEach((effect) => {
      console.log(`${effect.getName()} ${effect.getAmplifier()}`);
    });
}).setName("potioneffecttest");
