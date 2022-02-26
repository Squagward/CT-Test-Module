const settings = Client.settings;

register("command", () => {
  console.log(`---------------------------------`);
  console.log(`Client Settings:`);
  console.log(`FOV: ${settings.getFOV()}`);
  console.log(`Skin cape enabled?: ${settings.skin.getCape()}`);
  settings.skin.setHat(true);
  console.log(`Toggled hat on: ${settings.skin.getHat()}`);
  console.log(`Master Volume: ${settings.sound.getMasterVolume()}`);
  console.log(`VSync?: ${settings.video.getVsync()}`);
  console.log(`Chat web links?: ${settings.chat.getWebLinks()}`);
  console.log(`---------------------------------`);
}).setName("settingstest");
