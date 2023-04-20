var fs = require("fs");
var obj = JSON.parse(fs.readFileSync("database.json", "utf8"));

const checkMatch = () => {
  return obj["1"]["timeSlot"]["0"]["Intermediate"];
};

async function addParticipant(body) {
    obj[body["id"]]["timeSlot"][body["time"]][body["skill"]].push(body.name);
    var json = JSON.stringify(obj);
    fs.writeFile("database.json", json, (err) => {
      if (err) {
        throw err;
      }
      console.log("JSON data is saved.");
    });

  if (obj[body["id"]]["timeSlot"][body["time"]][body["skill"]].length >= 10) {
    return obj[body["id"]].timeSlot[body["time"]][body["skill"]];
  } else {
    return ["Waiting for more players"];
  }
}

module.exports = { checkMatch, addParticipant };
