let toggle = false;

register("step", () => {
  if (!Client.isInTab() || !toggle) return;

  const namesByObjectives = TabList.getNamesByObjectives();
  // TODO: Investigate, for some reason getObjectiveInDisplaySlot(0)
  // returns null every time as from what I can see

  const names = TabList.getNames();
  const myIndex2 = names.findIndex((name) => {
    return name.includes(Player.getName());
  });

  console.log(`${namesByObjectives.length} players on the scoreboard`);
  console.log(`My index by name: ${myIndex2}`);
  console.log(`Header: ${TabList.getHeader()}`);
  console.log(`Footer: ${TabList.getFooter()}`);
}).setDelay(5);

register("renderPlayerList", () => {
  if (!toggle) return;
  TabList.setFooter(null);
});

register("command", () => {
  toggle = !toggle;
}).setName("tablisttest");
