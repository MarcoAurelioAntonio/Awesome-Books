/* eslint-disable max-classes-per-file */
function localCheck() {
  if (!localStorage.getItem('book')) {
    localStorage.setItem('book', JSON.stringify(bookInfo));
  }
}

localCheck();

class ArrayTemplate {
  constructor() {
    this.titleSelector = document.querySelector('.title');
    this.authorSelector = document.querySelector('.author');
    this.addSelector = document.querySelector('.btn');
    this.listSelector = document.querySelector('.list');
    this.titleArr = [];
    this.authorArr = [];
    this.buttonArr = [];
    this.bookElement = [];
    this.books = [];
    this.bookInfo = {};
  }
  getInfo() {
    const obtainedInfo = JSON.parse(localStorage.getItem('book'));
    for (let i = 0; i < obtainedInfo.length; i += 1) {
      this.books.push(obtainedInfo[i]);
    }
  }
  forLoop() {
    for (let i = 0; i < this.books.length; i += 1) {
      this.bookElement[i] = document.createElement('div');
      this.listSelector.appendChild(this.bookElement[i]);
      this.bookElement[i].classList.add('bookbox');
      this.titleArr[i] = document.createElement('h2');
      this.authorArr[i] = document.createElement('p');
    
      this.bookElement[i].appendChild(this.titleArr[i]);
      this.bookElement[i].appendChild(this.authorArr[i]);
    
      this.titleArr[i].innerHTML = this.books[i].title;
      this.authorArr[i].innerHTML = this.books[i].author;
    
      this.buttonArr[i] = document.createElement('button');
      this.buttonArr[i].classList.add('remove-button');
      this.buttonArr[i].innerHTML = 'Remove';
      this.bookElement[i].appendChild(this.buttonArr[i]);
    }
  }
  storeInfo() {
    this.bookInfo.title = this.titleSelector.value;
    this.bookInfo.author = this.authorSelector.value;
    localStorage.setItem('book', JSON.stringify(this.books));
  }
  addfunction() {
    this.addSelector.addEventListener('click', () => {
      if (this.titleSelector.value !== '' && this.authorSelector.value !== '') {
        const newBook = {};
        this.storeInfo();
        newBook.title = this.titleSelector.value;
        newBook.author = this.authorSelector.value;
        this.titleSelector.value = '';
        this.authorSelector.value = '';
        this.listSelector.textContent = '';
        this.books.push(newBook);
        localStorage.setItem('book', JSON.stringify(this.books));
        for (let i = 0; i < this.books.length; i += 1) {
          this.bookElement[i] = document.createElement('div');
          this.listSelector.appendChild(this.bookElement[i]);
          this.bookElement[i].classList.add('bookbox');
          this.titleArr[i] = document.createElement('h2');
          this.authorArr[i] = document.createElement('p');
    
          this.bookElement[i].appendChild(this.titleArr[i]);
          this.bookElement[i].appendChild(this.authorArr[i]);
    
          this.titleArr[i].innerHTML = this.books[i].title;
          this.authorArr[i].innerHTML = this.books[i].author;
    
          this.buttonArr[i] = document.createElement('button');
          this.buttonArr[i].classList.add('remove-button');
          this.buttonArr[i].innerHTML = 'Remove';
          this.bookElement[i].appendChild(this.buttonArr[i]);
        }
      }
    });
  }
  removeItem(item) {
    this.books = this.books.filter((el) => el.title !== item.textContent);
    localStorage.setItem('book', JSON.stringify(this.books));
  }
  removeFunction() {
  const x = document.getElementsByClassName('list')[0];
  x.addEventListener('click', (e) => {
  if (e.target.textContent === 'Remove') {
    this.removeItem(e.target.parentElement.firstChild);
    e.target.parentElement.remove();
      }
    });
  }
}

let bookArr = new ArrayTemplate();
bookArr.getInfo();
bookArr.addfunction();
bookArr.forLoop();
bookArr.storeInfo();
bookArr.removeFunction();
