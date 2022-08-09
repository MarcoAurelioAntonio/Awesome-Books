const bookContainer = document.querySelector('.container');
const titleSelector = document.querySelector('.title');
const authorSelector = document.querySelector('.author');
const addSelector = document.querySelector('.btn');
const listSelector = document.querySelector('.list');

const bookArr = [
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

  buttonArr[i].addEventListener('click', () => {
    bookElement[i].remove();
  });

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
      bookElement[i].remove();
    });
  }
  titleSelector.value = '';
  authorSelector.value = '';

});



/*buttonArr[].addEventListener('click', () => {
  console.log('it works');
});*/

/*function showBook(book) {
  const title = document.createElement('h2');
  const author = document.createElement('p');
  title.innerHTML = book.title;
  author.innerHTML = book.author;
  listSelector.appendChild(title);
  listSelector.appendChild(author);
  const button = document.createElement('button');
  button.innerHTML = 'Remove';
  listSelector.appendChild(button);
  
}*/
