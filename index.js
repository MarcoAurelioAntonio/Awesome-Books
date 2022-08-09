const bookContainer = document.querySelector('.container');
const titleSelector = document.querySelector('.title');
const authorSelector = document.querySelector('.author');
const addSelector = document.querySelector('.btn');
const listSelector = document.querySelector('.list');

let bookArr = [
  {
    title: 'Dialogues',
    author: 'Plato',
  }
];

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
  console.log(buttonArr);

}

addSelector.addEventListener('click', () => {
    let newBook = {};

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

    buttonArr[i].addEventListener('click', () => {

      bookArr.splice(i, 1);

      listSelector.textContent = '';
      console.log(bookArr);
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


