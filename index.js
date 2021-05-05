function fetchBooks() {
  return fetch ('https://anapioficeandfire.com/api/books')
  .then  (resp => resp.json())
  .then (resp => renderBooks(resp))
}
// fetch('http://localhost:3000/pokemon',{
//   method: 'POST',
//   headers:{
//       'Content-Type':'application/json'
//   },
//   body: JSON.stringify(pokemon)
// })
// .then(res => res.json())
// .then(pokemon =>{
//   renderPokemon(pokemon)
// } )
// }
// function getAllPokemon(){
//   fetch('http://localhost:3000/pokemon')
//   .then(res => res.json())
//   .then(pokemon => pokemon.forEach(pok => renderPokemon(pok)))
// }

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
