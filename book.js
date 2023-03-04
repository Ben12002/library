let myLibrary = [];
const books = document.querySelector(".books");
const addButton = document.querySelector(".add");
const addForm = document.querySelector(".add-form");
const titleField = document.querySelector(".add-form input[name=title]");
const authorField = document.querySelector(".add-form input[name=author]");
const pagesField = document.querySelector(".add-form input[name=pages]");
const readField = document.querySelector(".add-form input[name=read]");

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

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function makeBookCard(book) {
    let card = document.createElement("div");
    let deleteButton = document.createElement("button");
    let index = myLibrary.indexOf(book);
    let readButton = document.createElement("input");

    readButton.type = "checkbox";
    readButton.id = "toggleRead";
    readButton.name = "toggleRead";
    readButton.value = "toggleRead";
    readButton.addEventListener("click", (Event) => {
        book.toggleRead();
        displayBooks();
    })

    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", (Event) => {
        myLibrary.splice(index, 1);
        displayBooks();
    });

    card.classList.add("card");
    //card.setAttribute("data-index", index);
    card.textContent = book.info();
    card.appendChild(deleteButton); // has to be put after textContent
    card.appendChild(readButton);
    return card;
}



function displayBooks() {
    books.innerHTML = '';
    myLibrary.forEach(book => {
        let bookCard = makeBookCard(book);
        books.appendChild(bookCard);
    });
}

function addBookToLibrary(event){
    let newTitle = titleField.value;
    let newAuthor = authorField.value;
    let newPages = pagesField.value;
    let newRead = readField.checked;
    myLibrary.push(new Book(newTitle, newAuthor, newPages, newRead));
    displayBooks();
    event.preventDefault();
}

addForm.addEventListener("submit", addBookToLibrary);

addButton.addEventListener("click", () => {
    addForm.classList.toggle("active");
} )

animalFarm = new Book("Animal Farm", "George Orwell", 100, true);
theMetamorphosis = new Book("The Metamorphosis", "Franz Kafka", 67, false);
myLibrary.push(animalFarm);
myLibrary.push(theMetamorphosis);
displayBooks()