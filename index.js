const bookContainer = document.querySelector(".container");
const titleSelector = document.querySelector(".title");
const authorSelector = document.querySelector(".author");
const addSelector = document.querySelector(".btn");
const listSelector = document.querySelector(".list");

//template
class Book{
	constructor(title, author) { // constructor
		this.bookTitle = title;
		this.bookAuthor = author;
	}
}

addSelector.addEventListener('click', ()=> {

	// if the inputs are empty does not do nothing.
	if (titleSelector.value !== '' && authorSelector.value !== '') {
		/*console.log(titleSelector.value);
		console.log(authorSelector.value);*/
	
		//New object
		const myBook = new Book(titleSelector.value, authorSelector.value);
	
		//create Title
		const newTitle = document.createElement('h3');
		newTitle.textContent = myBook.bookTitle;
		listSelector.appendChild(newTitle);
	
		//create paragraph
		const newAuthor = document.createElement('p');
		newAuthor.textContent = myBook.bookAuthor;
		listSelector.appendChild(newAuthor);
	
		//create delete button
		const deleted = document.createElement("button");
		deleted.classList.add("remove-button");
		deleted.textContent = 'Delete';
		listSelector.appendChild(deleted);
		/*
		console.log(myBook.bookTitle);
		console.log(myBook.bookAuthor);*/

		//clear imputs
		titleSelector.value = '';
		authorSelector.value = '';

	}
});
















/*
const bookInfo = {
  title: "",
  author: "",
};

localCheck();

let bookArr = [
  {
    title: "Dialogues",
    author: "Plato",
  },
];

getInfo();

const titleArr = [];
const authorArr = [];
const buttonArr = [];
const bookElement = [];

for (let i = 0; i < bookArr.length; i += 1) {
  bookElement[i] = document.createElement("div");
  listSelector.appendChild(bookElement[i]);

  titleArr[i] = document.createElement("h2");
  authorArr[i] = document.createElement("p");

  bookElement[i].appendChild(titleArr[i]);
  bookElement[i].appendChild(authorArr[i]);

  titleArr[i].innerHTML = bookArr[i].title;
  authorArr[i].innerHTML = bookArr[i].author;

  buttonArr[i] = document.createElement("button");
  buttonArr[i].classList.add("remove-button");
  buttonArr[i].innerHTML = "Remove";
  bookElement[i].appendChild(buttonArr[i]);
}

addSelector.addEventListener("click", () => {
  let newBook = {};

  storeInfo();
  newBook.title = titleSelector.value;
  newBook.author = authorSelector.value;
  listSelector.textContent = "";

  bookArr.push(newBook);
  localStorage.setItem("book", JSON.stringify(bookArr));
  console.log(JSON.parse(localStorage.getItem("book")));
  console.log(bookArr);
  const savedData = JSON.parse(localStorage.getItem("book"));
  for (let i = 0; i < bookArr.length; i += 1) {
    bookElement[i] = document.createElement("div");
    listSelector.appendChild(bookElement[i]);

    titleArr[i] = document.createElement("h2");
    authorArr[i] = document.createElement("p");

    bookElement[i].appendChild(titleArr[i]);
    bookElement[i].appendChild(authorArr[i]);

    titleArr[i].innerHTML = bookArr[i].title;
    authorArr[i].innerHTML = bookArr[i].author;

    buttonArr[i] = document.createElement("button");
    buttonArr[i].classList.add("remove-button");
    buttonArr[i].innerHTML = "Remove";
    bookElement[i].appendChild(buttonArr[i]);
  }
  titleSelector.value = "";
  authorSelector.value = "";
});

// remove btn starts here
const x = document.getElementsByClassName("list")[0];
x.addEventListener("click", (e) => {
  if (e.target.textContent === "Remove") {
    e.target.parentElement.remove();
  }
});

// ......................................................... //

function storeInfo() {
  bookInfo.title = titleSelector.value;
  bookInfo.author = authorSelector.value;
  localStorage.setItem("book", JSON.stringify(bookArr));
}

function getInfo() {
  const obtainedInfo = JSON.parse(localStorage.getItem("book"));
  if (bookInfo.title !== "") {
    bookArr.push(obtainedInfo);
  }
}

function localCheck() {
  if (localStorage.getItem("book") !== null) {
    localStorage.setItem("book", JSON.stringify(bookInfo));
  }
}

function display(displayBook) {
  console.log(displayBook);
  localStorage.setItem("book", JSON.stringify(bookArr));

  const newBookElement = document.createElement("div");
  listSelector.appendChild(newBookElement);

  const newTitle = document.createElement("h2");
  const newAuthor = document.createElement("p");

  newBookElement.appendChild(newTitle);
  newBookElement.appendChild(newAuthor);

  newTitle.innerHTML = displayBook.title;
  newAuthor.innerHTML = displayBook.author;

  const newButton = document.createElement("button");
  newButton.classList.add("remove-button");
  newButton.innerHTML = "Remove";
  newBookElement.appendChild(newButton);
}

const savedData = JSON.parse(localStorage.getItem("book"));
for (let i = 0; i < savedData.length; i += 1) {
  bookArr[i].title = savedData[i].title;
  bookArr[i].author = savedData[i].author;
} */
