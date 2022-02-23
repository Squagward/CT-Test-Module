FileLib.deleteDirectory(
    new java.io.File("./config/ChatTriggers/modules/TestModule/file1.txt")
);

FileLib.deleteDirectory(
    new java.io.File("./config/ChatTriggers/modules/TestModule/folder")
);

register("command", () => {
    FileLib.write("TestModule", "file1.txt", "Hello World!");
    try {
        FileLib.write("TestModule", "folder/file2.txt", "Should be written!");
    } catch (e) {
        console.error(`Error: ${e.message}`);
    }
    FileLib.write("./config/ChatTriggers/modules/TestModule/folder/file3.txt", "Also should be written!", true);
    FileLib.write("TestModule", "folder/deeply/nested/file4.txt", "This should be written as well!", true);

    FileLib.append("TestModule", "file1.txt", "\n2nd line");
    FileLib.append("./config/ChatTriggers/modules/TestModule/folder/file3.txt", "3rd line");

    console.assert(FileLib.read("TestModule", "file1.txt") === "Hello World!\n2nd line");
    console.assert(
        FileLib.read("./config/ChatTriggers/modules/TestModule/folder/file3.txt") ===
        "Also should be written!3rd line"
    );
    console.assert(FileLib.exists("TestModule", "file1.txt"));
    console.assert(FileLib.isDirectory("TestModule", "folder"));

    const sampleData = FileLib.getUrlContent(
        "https://jsonplaceholder.typicode.com/todos/1"
    )

    console.assert(JSON.parse(sampleData).title === "delectus aut autem");

    //TODO: Add test for FileLib.unzip
}).setName("filelibtest");
