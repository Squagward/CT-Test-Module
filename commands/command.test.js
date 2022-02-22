/**
 * Should give a command with 3 tab completion options, with an alias
 */
register("command", (subcommand) => {
    ChatLib.chat(`Calling /commandtest ${subcommand}`);
})
    .setTabCompletions("sub1", "sub2", "sub3")
    .setName("commandtest")
    .setAliases("ctt");

/**
 * Should error since ct command is already taken
 */
try {
    register("command", () => {}).setName("commandtest");
} catch (e) {
    console.error(`Error: ${e.message}`);
}

/**
 * Should override the ctt alias since overrideExisting is true
 */
register("command", () => {
    ChatLib.chat("This should be overridden!");
}).setName("ctt", true);
