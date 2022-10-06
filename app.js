'use strict';

const ans = document.getElementById("answers");
const ques = document.getElementById("questions");



function getJSON(path) {
    return fetch(path).then(response => response.json());
}

getJSON('./dogBreeds.json').then(data => {
 for (const dog of data) {
  console.log(dog.name);
 }
});

