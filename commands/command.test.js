/**
 * Should give a command with 3 tab completion options, with an alias
 */
register("command", (subcommand) => {
    ChatLib.chat(`Calling /cttest ${subcommand}`);
})
    .setTabCompletions("sub1", "sub2", "sub3")
    .setName("cttest")
    .setAliases("ctt");

/**
 * Should error since ct command is already taken
 */
try {
    register("command", () => {}).setName("ct");
    throw new Error("This should be unreachable!");
} catch (e) {
    ChatLib.chat(`Error: ${e.message}`);
}

/**
 * Should override the ct command since overrideExisting is trues
 */
register("command", () => {
    ChatLib.chat("This should be overridden!");
}).setName("chattriggers", true);
