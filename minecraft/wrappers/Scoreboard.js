const mockScoreboard = new Display()
  .setBackground("full")
  .setShouldRender(false)
  .setRenderLoc(20, 20);

const mockScoreboardScores = new Display()
  .setBackground("full")
  .setShouldRender(false)
  .setAlign("right");

register("tick", () => {
  mockScoreboard
    .clearLines()
    .addLine(new DisplayLine(Scoreboard.getTitle()).setAlign("center"));
  mockScoreboard.addLines(
    ...Scoreboard.getLines(false).map((line) => line.getName())
  );
  mockScoreboardScores.clearLines().addLine(0, "");
  mockScoreboardScores
    .addLines(
      ...Scoreboard.getLines(false).map((line) => `§c${line.getPoints()}`)
    )
    .setRenderLoc(
      mockScoreboard.getRenderX() +
        mockScoreboard.getWidth() +
        mockScoreboardScores.getWidth() +
        1,
      mockScoreboard.getRenderY()
    );
});

register("command", () => {
  Scoreboard.setTitle("§c§lScoreboard Testing!");

  Scoreboard.setShouldRender(!Scoreboard.getShouldRender());
  mockScoreboard.setShouldRender(!mockScoreboard.getShouldRender());
  mockScoreboardScores.setShouldRender(!mockScoreboardScores.getShouldRender());

  Scoreboard.setLine(6, "Overwriting line with 6 points!", true);
  const sixes = Scoreboard.getLinesByScore(6).length;
  console.assert(
    sixes >= 1,
    "Scoreboard.getLinesByScore(6) should return at least one line"
  );

  Scoreboard.setLine(37, "Making new line with 37 points!", false);
}).setName("scoreboardtest");
