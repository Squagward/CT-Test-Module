register("command", () => {
  console.log(`---------------------------------`);
  console.log(`Connected to server ${Server.getName()}`);
  console.log(`IP: ${Server.getIP()}`);
  console.log(`MOTD: ${Server.getMOTD()}`);
  console.log(`Ping: ${Server.getPing()}`);
  console.log(`---------------------------------`);
}).setName("servertest");
