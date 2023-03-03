function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readString;
        if (this.read) {
            readString = "already read";
        } else {
            readString = "not read yet";
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}`;
    }
}