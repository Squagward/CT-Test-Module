const message = new Message("Hello World!");

let toggle = false;

register("chat", (event) => {
  if (!toggle) return;

  cancel(event);

  const msg1 = new Message(event).setChatLineId(1234);
  const msg2 = new Message(EventLib.getMessage(event));
  console.assert(
    msg1.getChatMessage().equals(msg2.getChatMessage()),
    "Message.getChatMessage()"
  );

  ChatLib.chat(`msg1 ${msg1.getFormattedText()}`);
  ChatLib.chat(`msg2 ${msg2.getUnformattedText()}`);

  msg1.setTextComponent(0, new TextComponent("§cI replaced the first part"));
  msg1.chat();
  msg2.addTextComponent(new TextComponent("§6This part is at the end"));
  msg2.chat();
});

register("chat", () => {
  ChatLib.chat("§4this was triggered recursively");
})
  .setCriteria("Hello World!")
  .setContains();

register("command", () => {
  toggle = !toggle;
  if (!toggle) return;

  const t = register("tick", () => {
    new Message(
      Player.getHeldItem() ?? "",
      Player.armor.getHelmet() ?? "",
      new TextComponent("Hello World!")
    )
      .setRecursive(true)
      .chat();
    t.unregister();
  });

  const msg3 = new Message("message 3 woohoo");
  msg3.chat();

  setTimeout(() => {
    msg3.edit(
      new Message("§2this was edited"),
      new Message("§athis was edited also")
    );
  }, 5000);

  new Message("this is on the action bar ").actionBar();
}).setName("messagetest");
