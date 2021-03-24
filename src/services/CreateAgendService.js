const QueryExecute = require("../config/connection.js");
const uuidv4 = require("uuid");

class CreateAgendService {
  async execute(initialTime, finalTime, description) {
    let agend;
    const newIdAgend = uuidv4.v4();

    const queryCreateAgend =
      "INSERT INTO agends(id, initial_time, final_time, description) VALUES (?, ?, ?, ?)";
    const valueInsertAgend = [newIdAgend, initialTime, finalTime, description];

    await QueryExecute(queryCreateAgend, valueInsertAgend);

    const queryGetNewAgend = "SELECT * FROM agends WHERE id = ?";
    const valuesGetNewAgend = [newIdAgend];

    agend = await QueryExecute(queryGetNewAgend, valuesGetNewAgend);

    return agend;
  }
}

module.exports = CreateAgendService;
