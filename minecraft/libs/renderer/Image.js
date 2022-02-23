let toggled = false;

const image = new Image("money cat.jpeg", "https://i.imgur.com/AD3MbBi.jpeg");

const width = image.getTextureWidth();
const height = image.getTextureHeight();

register("renderOverlay", () => {
  if (!toggled) return;
  image.draw(0, 0, width / 4, height / 4);
});

register("command", () => {
  toggled = !toggled;
}).setName("imagetest");
