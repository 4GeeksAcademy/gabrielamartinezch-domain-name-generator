import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // console.log("Any string");

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let textMap = '<ul class="list-group">';
  textMap += '<li class="alert alert-primary" role="alert">Map method</li>';

  pronoun.map(iterator => {
    adj.map(item => {
      noun.map(element => {
        textMap += `
          <li class="list-group-item">
            ${iterator}${item}${element}.com
          </li>
        `;
      });
    });
  });

  textMap += "</ul>";
  document.querySelector("#map").innerHTML = textMap;
};
