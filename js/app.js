let elem = document.getElementById("root");
let superHeroes = [];
let suitColors = ["red", "blue", "grey"];

let spiderMan = {
  index: 0,
  name: "Spiderman",
  superpowers: "Webswinging and wall crawling",
  color: function suit(tzvika, moshe) {
    tzvika.style.backgroundColor = moshe;
  },
};
superHeroes.push(spiderMan);

let captainAmerica = {
  index: 1,
  name: "Captain America",
  superpowers: "Shild throwing super soldier",
  superbuddy: "His only friend is his shield",
  color: function suit(elem, color) {
    elem.style.backgroundColor = color;
  },
};
superHeroes.push(captainAmerica);

let batMan = {
  index: 2,
  name: "Batman",
  superpowers: "Dresses like a bat and actually nothing more",
  color: function suit(elem, color) {
    elem.style.backgroundColor = color;
  },
};
superHeroes.push(batMan);

for (let hero of superHeroes) {
  elem.innerHTML += `
<div class="inner-div">
    <div>${hero.name}</div>
    <div>${hero.superpowers} </div>`;
  if (hero == captainAmerica) {
    elem.innerHTML += `<div id = "buddy">${hero.superbuddy} </div>`;
  }
  `
</div>
`;
  let myDivs = document.querySelectorAll(".inner-div");
  superHeroes[hero.index].color(myDivs[hero.index], suitColors[hero.index]);
}
let buddy = document.getElementById("buddy");
buddy.style.backgroundColor = "blue";
document.body.style.textAlign = "center";
