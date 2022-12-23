//Importing the given data.
import {bookData} from './js/book-data.js';

//Global Variables
const booksDiv = document.querySelector(".bookshelf");
const bookButton = document.getElementById("bookButton");
let bookShelfArray = [];

//Creates the class structure for each book.
class book
{
    constructor(author, language, subject, title)
    {
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
    }
}

//a loop that iterates all books into their own New Class of Books and pushes them into the bookshelf array.
for( let i  = 0; i < bookData.length; i++)
{
    const newBooks = new book(bookData[i].author, bookData[i].language, bookData[i].subject, bookData[i].title);
    bookShelfArray.push(newBooks);
}


//pulls values for the input fields and pushes them into the Bookshelf array and reruns the render function.  
function event()
{

    const authorInput = document.getElementById("authorField").value;
    const titleInput = document.getElementById("titleField").value;
    const subjectInput = document.getElementById("subjectField").value;
    const languageInput = document.getElementById("languageField").value;

    const newBooks = new book(authorInput, languageInput, subjectInput, titleInput )
    bookShelfArray.push(newBooks);

    document.getElementById("authorField").value = "";
    document.getElementById("titleField").value = "";
    document.getElementById("subjectField").value = "";
    document.getElementById("languageField").value ="";

    bookRender();
}

//creates the DOM elements via a loop.
function bookRender()
{
    for(let i = 0; i < bookShelfArray.length; i++ )
    {
        let newId = "ul" + i;
        let bookElement = document.createElement(newId);
        let title = document.createElement("li");
        let author = document.createElement("li");
        let subject = document.createElement("li");
        let language = document.createElement("li");

        author.innerHTML = bookShelfArray[i].author;
        subject.innerHTML = bookShelfArray[i].subject;
        language.innerHTML = bookShelfArray[i].language;
        title.innerHTML = bookShelfArray[i].title;

        bookElement.appendChild(title);
        bookElement.appendChild(author);
        bookElement.appendChild(subject);
        bookElement.appendChild(language);
        booksDiv.appendChild(bookElement);

        bookElement.classList.add("bookElement");
        title.classList.add("title");
    }
}

//executes the DOM elements to appear in the browser.
bookRender();

//evernt listener for the submit button. Calls event function.
bookButton.addEventListener("click", event);