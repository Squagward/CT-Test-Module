register("command", () => {
  const text = new TextComponent("wow this is soooo cool")
    .setClick("open_url", "https://www.google.com")
    .setHover("show_text", "this is a hover text");
  text.chat();
  text.actionBar();
}).setName("textcomponenttest");
