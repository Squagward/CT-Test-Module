register("command", () => {
    ChatLib.chat(`Test ${test++} passed!`);
}).setName("cttest");

try {
    // Should error since ct command is already taken
    register("command", () => {}).setName("ct");
    throw new Error("This should be unreachable");
} catch (e) {
    ChatLib.chat(`Test ${test++} passed!`);
}
