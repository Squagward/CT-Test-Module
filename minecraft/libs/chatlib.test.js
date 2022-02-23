register("command", () => {
    ChatLib.chat("1");
    ChatLib.chat("2");
    ChatLib.chat("3");
    ChatLib.chat(new Message("4").setChatLineId(123));
    ChatLib.actionBar("ActionBar");
    ChatLib.say("ChatLib.say() works!");

    ChatLib.deleteChat(/1/);
    ChatLib.deleteChat(new Message("2"));
    ChatLib.deleteChat("3");
    ChatLib.deleteChat(123);

    ChatLib.chat("4");
    ChatLib.chat("5");
    ChatLib.chat("6");
    ChatLib.chat(new Message("7").setChatLineId(456));

    ChatLib.editChat(/4/, new Message("4.1"));
    ChatLib.editChat(new Message("5"), new Message("5.1"));
    ChatLib.editChat("6", new Message("6.1"));
    ChatLib.editChat(456, new Message("7.1").setChatLineId(789));

    ChatLib.addToSentMessageHistory("ChatLib.addToSentMessageHistory() works!");
    ChatLib.addToSentMessageHistory(1, "Should be in index 1!");

    ChatLib.clearChat(789);

    ChatLib.command("ct"); // This is intended to not work since it is a client side command
    ChatLib.command("ct", true);

}).setName("chatlibtest");