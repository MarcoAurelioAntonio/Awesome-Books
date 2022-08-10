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

    buttonArr[i].addEventListener('click', (e) => {

      bookArr.splice(i, 1);

      listSelector.textContent = '';
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
    });


  };
  titleSelector.value = '';
  authorSelector.value = '';

});

function storeInfo() {
  bookInfo.title = titleSelector.value;
  bookInfo.author = authorSelector.value;
  localStorage.setItem('book', JSON.stringify(bookInfo));
}

function getInfo() {
  const obtainedInfo = JSON.parse(localStorage.getItem('book'));
  if (bookInfo.title !== '') {
  bookArr.push(obtainedInfo);
  }
}

function localCheck() {
  if (localStorage.getItem('book') === null) {
    localStorage.setItem('book', JSON.stringify(bookInfo));
  }
}
