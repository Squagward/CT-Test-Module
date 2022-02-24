let toggled = false;

const triangle = new Shape(Renderer.DARK_PURPLE)
  .addVertex(100, 100)
  .addVertex(200, 100)
  .addVertex(150, 200);

const line = new Shape(Renderer.AQUA).setLine(200, 0, 300, 100, 2);

const circle = new Shape(Renderer.RED).setCircle(400, 200, 50, 30);

const triangleCopy = triangle
  .clone()
  .removeVertex(0)
  .removeVertex(0)
  .insertVertex(0, 300, 300)
  .insertVertex(2, 400, 200)
  .setColor(Renderer.BLACK);

register("renderOverlay", () => {
  if (!toggled) return;
  triangle.draw();
  line.draw();
  circle.draw();
  triangleCopy.draw();
});

register("command", () => {
  toggled = !toggled;
}).setName("shapetest");
