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


for (let i = 0; i < bookArr.length; i += 1) {
  titleArr[i] = document.createElement('h2');
  authorArr[i] = document.createElement('p');

  listSelector.appendChild(titleArr[i]);
  listSelector.appendChild(authorArr[i]);

  titleArr[i].innerHTML = bookArr[i].title;
  authorArr[i].innerHTML = bookArr[i].author; 

  buttonArr[i] = document.createElement('button');
  buttonArr[i].innerHTML = 'Remove';
  listSelector.appendChild(buttonArr[i]);
}

function addBook() {
  let newBook = {   
      title: '',
      author: '',
  }

  titleSelector.value = newBook.title;

  console.log(newBook);
  console.log(newBook.title);
  console.log(titleSelector.value);

}

addSelector.addEventListener('click', addBook());

