register("command", () => {
  new Thread(() => {
    Thread.sleep(2000);
    console.log(`---------------------------------`);
    console.log("Thread Started!");
    console.log(Thread.currentThread().toString());
    Thread.sleep(1000);
    console.log("Slept for 1 second!");
    console.log(`---------------------------------`);
  }).start();
}).setName("threadtest");
