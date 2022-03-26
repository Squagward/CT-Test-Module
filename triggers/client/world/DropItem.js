let toggle = false;

register("dropItem", (item) => {
    if (!toggle) return;
    console.log(item.toString());
    console.log("dropItem triggered");
});

register("command", () => {
    toggle = !toggle;
}).setName("dropitemtest");
