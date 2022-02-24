const book = new Book("TestModule book");
book
  .addPage(
    new Message(
      new TextComponent("This is page one of the book!").setHover(
        "show_item",
        Player.getHeldItem()?.getRawNBT() ?? ""
      )
    )
  )
  .addPage("This is page two of the book!")
  .setPage(20, new Message("This is on page 21 since its index 20!"));

register("command", () => {
  book.setPage(10, new Message("this should be on the 11th page!"));
  book.display(10);
  setTimeout(() => {
    console.assert(
      book.getCurrentPage() === 10,
      "Book page index is not 10, it is " + book.getCurrentPage()
    );
  }, 1000);
}).setName("booktest");
