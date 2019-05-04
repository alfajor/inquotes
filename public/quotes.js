let content = document.querySelector('.quote');
let author = document.querySelector('.author');

fetch(`https://favqs.com/api/qotd`).then((res) => {
    return res.json();
  })
  .then((item) => {
    content.innerHTML = item.quote.body;
    author.innerHTML = '&#45; ' + item.quote.author;
  })
  .catch(error => console.error(`There was an ${error}`.red));
