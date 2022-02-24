const C01PacketChatMessage = Java.type(
  "net.minecraft.network.play.client.C01PacketChatMessage"
);

const forward = Client.getKeyBindFromKey(Keyboard.KEY_W);
const otherKeyBind = Client.getKeyBindFromKey(
  Keyboard.KEY_X,
  "otherKey",
  "TestModule"
).registerKeyPress(() => {
  ChatLib.chat("otherKey pressed");
});
const right = Client.getKeyBindFromDescription("key.right");

register("tick", () => {
  if (Keyboard.isKeyDown(Keyboard.KEY_APOSTROPHE)) {
    Client.currentGui.close();
  }
});

register("command", (arg) => {
  if (arg === "disconnect") {
    Client.disconnect();
  } else {
    console.log("fov", Client.settings.getFOV());

    forward.setState(true);
    right?.setState(true);

    Client.sendPacket(new C01PacketChatMessage("Client test!"));
    Client.showTitle("Title", "Subtitle", 10, 20, 30);
  }
}).setName("clienttest");

register("packetSent", (packet) => {
  if (packet instanceof C01PacketChatMessage) {
    console.log("Chat packet sent!");
  }
});
