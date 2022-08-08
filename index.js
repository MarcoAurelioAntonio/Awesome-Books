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


for (let i = 0; i < bookArr.length; i += 1) {
  titleArr[i] = document.createElement('h2');
  authorArr[i] = document.createElement('p');

  listSelector.appendChild(titleArr[i]);
  listSelector.appendChild(authorArr[i]);

  titleArr[i].innerHTML = bookArr[i].title;
  authorArr[i].innerHTML = bookArr[i].author; 

}