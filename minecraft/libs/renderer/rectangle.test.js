let toggled = false;

const rectangle = new Rectangle(Renderer.BLUE, 10, 200, 100, 100)
    .setOutline(Renderer.RED, 2)
    .setShadow(true)
    .setShadowColor(Renderer.GREEN);

register("renderOverlay", () => {
    if (!toggled)
        return;
    rectangle.draw();
});

register("command", () => {
    toggled = !toggled;
}).setName("rectangletest");