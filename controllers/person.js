const Person = require("../models/character");
const Films = require("../models/films");

let check = arr => {
  b = {};
  max = 0;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    !b[item] ? (b[item] = 1) : b[item]++;
    if (b[item] > max) max = b[item];
  }

  newArr = Object.entries(b);
  let x = newArr.filter(actor => actor[1] === max);
  let y = x.map(xx => {
    return parseInt(xx[0]);
  });
  return y;
};

exports.FetchPerson = (req, res, next) => {
  Films.fetchAll()
    .then(result => {
      let characters = [];
      result.map(character => {
        characters.push(...character["characters"]);
        return characters;
      });
      let answer = check(characters);
      Person.findByCharacterId(answer)
        .then(result => {
          // res.json(result);
          let returnedName = result.map(name => {
            return name["name"];
          });
          res.json(returnedName);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};
