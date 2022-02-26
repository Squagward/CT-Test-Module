let toggle = false;

register("spawnParticle", (particle, type, event) => {
  if (!toggle) return;

  particle
    .multiplyVelocity(0.1)
    .scale(10)
    .setMaxAge(20 * 10);
});

register("command", () => {
  toggle = !toggle;
}).setName("particletest");
