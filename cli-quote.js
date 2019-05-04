const fetch = require('node-fetch');
const colors = require('colors');

fetch(`https://favqs.com/api/qotd`).then((res) => {
    return res.json();
  }).then((item) => {
    console.log('"'.grey + item.quote.body.cyan + '"'.grey + '\n' + '-' + item.quote.author.yellow);
  }).catch(error => console.error(`There was an ${error}`));
