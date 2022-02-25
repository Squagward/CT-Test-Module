let toggle = false;
register("step", () => {
  if (!toggle) return;

  ChatLib.chat(`§aLeft Clicks: ${CPS.getLeftClicks()}`);
  ChatLib.chat(`§bLeft Clicks Avg: ${CPS.getLeftClicksAverage()}`);
  ChatLib.chat(`§cLeft Clicks Max: ${CPS.getLeftClicksMax()}`);
}).setFps(1);

register("command", () => {
  toggle = !toggle;
}).setName("cpstest");
