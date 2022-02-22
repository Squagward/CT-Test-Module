const triangle = new Shape(Renderer.DARK_PURPLE)
    .addVertex(100, 100)
    .addVertex(200, 100)
    .addVertex(150, 200);

const line = new Shape(Renderer.AQUA).setLine(200, 0, 300, 100, 2);

const circle = new Shape(Renderer.RED).setCircle(200, 200, 50, 30);

const lineCopy = triangle.clone().removeVertex(0).insertVertex(0, 300, 300).setColor(Renderer.BLACK);

register("renderOverlay", () => {
    triangle.draw();
    line.draw();
    circle.draw();
    lineCopy.draw();
});