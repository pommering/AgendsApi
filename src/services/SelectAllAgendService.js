const QueryExecute = require("../config/connection.js");

class SelectAllAgendService {
  async execute() {
    let agends;

    const queryGetAgends = "SELECT * FROM agends";

    agends = await QueryExecute(queryGetAgends);

    return agends;
  }
}

module.exports = SelectAllAgendService;
