const image = new Image("money cat.jpeg", "https://i.imgur.com/AD3MbBi.jpeg");

const width = image.getTextureWidth();
const height = image.getTextureHeight();

register("renderOverlay", () => {
   image.draw(0, 0, width / 4, height / 4);
});
