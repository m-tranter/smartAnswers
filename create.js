"use strict";

const fileBtn = document.getElementById("fileBtn");
const main = document.getElementsByName("main");
const summary = document.getElementsByName("summary");

let fileHandle;
fileBtn.addEventListener("click", async () => {
  [fileHandle] = await window.showOpenFilePicker();
});

class Question {
  constructor(que) {
    this.que = que;
  }
}

var app = new Vue({
  el: "#vueContainer",
  data() {
    return {
      questions: [],
      quest: "",
      dogs: [],
    };
  },
  methods: {
    addQuest: function (q) {
      let temp = new Question(q);
      this.questions.push(temp);
      console.log(this.questions);
    },
    getJSON: function (path) {
      return fetch(path).then((response) => response.json());
    },
  },
  mounted() {
    this.getJSON("./dogBreeds.json").then((data) => {
      this.dogs = data.slice();
      console.log("Got dog data.");
    });
  },
});
