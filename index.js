const titleSelector = document.querySelector('.title');
const authorSelector = document.querySelector('.author');
const addSelector = document.querySelector('.btn');
const listSelector = document.querySelector('.list');
console.log(titleSelector);
const bookArr = [];
/*
const titleArr = [];
const authorArr = [];
const buttonArr = [];*/


/*for (let i = 0; i < bookArr.length; i += 1) {
  titleArr[i] = document.createElement('h2');
  authorArr[i] = document.createElement('p');

  listSelector.appendChild(titleArr[i]);
  listSelector.appendChild(authorArr[i]);

  titleArr[i].innerHTML = bookArr[i].title;
  authorArr[i].innerHTML = bookArr[i].author; 

  buttonArr[i] = document.createElement('button');
  buttonArr[i].innerHTML = 'Remove';
  listSelector.appendChild(buttonArr[i]);
}*/
function showBook(book) {
  const title = document.createElement('h2');
  const author = document.createElement('p');
  title.innerHTML = book.title;
  author.innerHTML = book.author;
  listSelector.appendChild(title);
  listSelector.appendChild(author);
  const button = document.createElement('button');
  button.innerHTML = 'Remove';
 /* button.addEventListener('click', removeBook(e))*/
  listSelector.appendChild(button);


  
}
addSelector.addEventListener('click', () => {
    let newBook = {};

  newBook.title = titleSelector.value;
  newBook.author = authorSelector.value;
  bookArr.push(newBook);
  showBook(newBook);
  console.log(bookArr);
  titleSelector.value = '';
  authorSelector.value = '';
  console.log(newBook.title);
  console.log(titleSelector);
  console.log(newBook.author);
  console.log(authorSelector);
  console.log(newBook);

});


