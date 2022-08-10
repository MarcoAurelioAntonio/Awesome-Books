const bookContainer = document.querySelector('.container');
const titleSelector = document.querySelector('.title');
const authorSelector = document.querySelector('.author');
const addSelector = document.querySelector('.btn');
const listSelector = document.querySelector('.list');

const bookInfo = {
  title: '',
  author: '',
};

localCheck();


let bookArr = [
  {
    title: 'Dialogues',
    author: 'Plato',
  }
];

getInfo();

const titleArr = [];
const authorArr = [];
const buttonArr = [];
const bookElement = [];


for (let i = 0; i < bookArr.length; i += 1) {

  bookElement[i] = document.createElement('div');
  listSelector.appendChild(bookElement[i]);

  titleArr[i] = document.createElement('h2');
  authorArr[i] = document.createElement('p');

  bookElement[i].appendChild(titleArr[i]);
  bookElement[i].appendChild(authorArr[i]);

  titleArr[i].innerHTML = bookArr[i].title;
  authorArr[i].innerHTML = bookArr[i].author; 

  buttonArr[i] = document.createElement('button');
  buttonArr[i].classList.add('remove-button');
  buttonArr[i].innerHTML = 'Remove';
  bookElement[i].appendChild(buttonArr[i]);

}

addSelector.addEventListener('click', () => {
    let newBook = {};

  storeInfo();
  newBook.title = titleSelector.value;
  newBook.author = authorSelector.value;
  listSelector.textContent = '';
  
  bookArr.push(newBook);
  localStorage.setItem('book', JSON.stringify(bookArr));
  console.log(JSON.parse(localStorage.getItem('book')));
  console.log(bookArr);
  const savedData = JSON.parse(localStorage.getItem('book'));
  for (let i = 0; i < bookArr.length; i += 1) {

    bookElement[i] = document.createElement('div');
    listSelector.appendChild(bookElement[i]);

    titleArr[i] = document.createElement('h2');
    authorArr[i] = document.createElement('p');

    bookElement[i].appendChild(titleArr[i]);
    bookElement[i].appendChild(authorArr[i]);

    titleArr[i].innerHTML = bookArr[i].title;
    authorArr[i].innerHTML = bookArr[i].author; 

    buttonArr[i] = document.createElement('button');
    buttonArr[i].classList.add('remove-button');
    buttonArr[i].innerHTML = 'Remove';
    bookElement[i].appendChild(buttonArr[i]);

  };
  titleSelector.value = '';
  authorSelector.value = '';

});

// remove btn starts here
const x = document.getElementsByClassName('list')[0];
x.addEventListener('click', (e) => {
  if (e.target.textContent === 'Remove'){
    e.target.parentElement.remove();
  }
});

  // ......................................................... //


function storeInfo() {
  bookInfo.title = titleSelector.value;
  bookInfo.author = authorSelector.value;
  localStorage.setItem('book', JSON.stringify(bookArr));
}

function getInfo() {
  const obtainedInfo = JSON.parse(localStorage.getItem('book'));
  if (bookInfo.title !== '') {
  bookArr.push(obtainedInfo);
  }
}

function localCheck() {
  if (localStorage.getItem('book') !== null) {
    localStorage.setItem('book', JSON.stringify(bookInfo));
  }
}

function display(displayBook) {
  console.log(displayBook);
  localStorage.setItem('book', JSON.stringify(bookArr));

    const newBookElement = document.createElement('div');
    listSelector.appendChild(newBookElement);

    const newTitle = document.createElement('h2');
    const newAuthor = document.createElement('p');

    newBookElement.appendChild(newTitle);
    newBookElement.appendChild(newAuthor);

    newTitle.innerHTML = displayBook.title;
    newAuthor.innerHTML = displayBook.author; 

    const newButton = document.createElement('button');
    newButton.classList.add('remove-button');
    newButton.innerHTML = 'Remove';
    newBookElement.appendChild(newButton);
}

/*bookArry[i].title = savedData[I].title*/
/*for (let I = 0; I< savedData.length; I++)*/

const savedData = JSON.parse(localStorage.getItem('book'));
for (let i = 0; i < savedData.length; i+=1) {
  bookArr[i].title = savedData[i].title
  bookArr[i].author = savedData[i].author
}