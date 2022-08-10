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

let bookArr = [];

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
  if (titleSelector.value !== '' && authorSelector.value !== '') {
    let newBook = {};
  storeInfo();
  newBook.title = titleSelector.value;
  newBook.author = authorSelector.value;
  listSelector.textContent = '';
  bookArr.push(newBook);
  localStorage.setItem('book', JSON.stringify(bookArr));
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
  }
});

// remove btn starts here
function removeItem(item) {
  bookArr = bookArr.filter((el) => el.title !== item.textContent);
  localStorage.setItem('book', JSON.stringify(bookArr));
}

const x = document.getElementsByClassName('list')[0];
x.addEventListener('click', (e) => {
  if (e.target.textContent === 'Remove'){
    removeItem(e.target.parentElement.firstChild)
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
  for (let i = 0; i < obtainedInfo.length; i += 1) {
    bookArr.push(obtainedInfo[i]);
  };
}

function localCheck() {
  if (!localStorage.getItem('book')) {
    localStorage.setItem('book', JSON.stringify(bookInfo));
  }
}
