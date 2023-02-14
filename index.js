let books;
if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'));
} else {
  books = [{ title: 'Oromay', author: 'Bealu Girma', id: 'id1' },
    { title: 'Fikir Esike mekabir', author: 'Dr. Hadis Alemayehu', id: 'id2' },
    { title: 'Dertogada', author: "Yisma'eke worku", id: 'id3' },
    { title: 'Emegua', author: 'Dr. Alemayehu Wase', id: 'id4' }];
}

// let books = [{title: 'Oromay', author: 'Bealu Girma', id: 'id1'},
//             {title: 'Fikir Esike mekabir', author: 'Dr. Hadis Alemayehu', id: 'id2'},
//             {title: 'Dertogada', author: "Yisma'eke worku", id: 'id3'},
//             {title: 'Emegua', author: 'Dr. Alemayehu Wase', id: 'id4'}];
render();

function addBooks() {
  const newTitle = document.querySelector('.new-title').value;
  const newAuthor = document.querySelector('.new-author').value;
  const id = `${new Date().getTime()}`;
  books.push({ title: newTitle, author: newAuthor, id });
  render();
  savedBooks();
}

function removeBooks(idToDelete) {
  books = books.filter((book) => {
    if (book.id === idToDelete) {
      return false;
    }

    return true;
  });
  savedBooks();
  render();
}

function savedBooks() {
  localStorage.setItem('books', JSON.stringify(books));
}

function render() {
  const cont = document.querySelector('.container');
  cont.innerHTML = '';
  books.forEach((book) => {
    const elem = document.createElement('div');
    elem.className = 'book-cont';
    elem.innerHTML = `<p class="title">${book.title}</p>
    <p class="author">${book.author}</p>
    <button id=${book.id} class="remove" onclick="deleteBooks()">Remove</button>`;
    cont.appendChild(elem);
  });
}

function deleteBooks(e) {
  console.log(e);
  const deleteButton = e.target;
  const idToDelete = deleteButton.id;
  removeBooks(idToDelete);
  render();
}

// let removeBtn = document.querySelectorAll('.remove');

// removeBtn.forEach(function(btn) {
//   btn.addEventListener('click', function(e){
//     console.log(e.target);

//     removeBooks(idToDelete);
//     // render();
//   })

// })