const QueryExecute = require("../config/connection.js");

class SelectBetweenAgendsService {
  async execute(initialTime, finalTime) {
    let agends;

    const queryGetAgends =
      "SELECT * FROM agends WHERE initial_time between ? AND ? OR final_time between ? AND ?";
    const valuesGetAgends = [
      initialTime + " 00:00:00",
      finalTime + " 23:59:59",
      initialTime + " 00:00:00",
      finalTime + " 23:59:59"
    ];

    agends = await QueryExecute(queryGetAgends, valuesGetAgends);

    return agends;
  }
}

module.exports = SelectBetweenAgendsService;
