const text = new Text("Hello World!\n this will be cut off!")
    .setColor(Renderer.RED)
    .setShadow(true)
    .setAlign(DisplayHandler.Align.RIGHT)
    .setMaxWidth(30)
    .setScale(0.8)
    .setMaxLines(2);

register("renderOverlay", () => {
    text.draw(300, 10);
});