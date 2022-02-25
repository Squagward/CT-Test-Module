const myKey = new KeyBind(
  "Test Keybind",
  Keyboard.KEY_NONE,
  "Test Keybind Description"
);

myKey.registerKeyDown(() => {
  console.log("Keybind held down");
});

myKey.registerKeyPress(() => {
  console.log("Keybind pressed");
});

myKey.registerKeyRelease(() => {
  console.log("Keybind released");
});

register("command", () => {
  myKey.setState(true);
}).setName("keybindtest");
