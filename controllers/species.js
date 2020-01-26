const Films = require("../models/films");
const Species = require("../models/species");

let merge = arr => {
  let mergedArr = [];
  for (let i = 0; i < arr.length; i++) {
    mergedArr.push(arr[i]);
  }
  return mergedArr;
};

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

exports.AllSpecies = (req, res, next) => {
  let species = [];
  try {
    Films.fetchAll()
      .then(result => {
        let allSpeciesHistory = result.map(specie => {
          species.push(...specie["species"]);
          return species;
        });
        let mostAppearances = check(merge(allSpeciesHistory)[0]);
        const finalResult = [];
        Species.findByCharacterId(mostAppearances)
          .then(result => {
            let mapped = result.map((specie, index) => {
              finalResult.push({
                specie: specie["name"],
                appearances: specie["people"].length
              });
            });
            res.status(200).json(finalResult);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
