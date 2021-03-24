const express = require("express");

const CreateAgendService = require("../services/CreateAgendService.js");
const SelectAllAgendService = require("../services/SelectAllAgendService.js");
const DeleteAgendService = require("../services/DeleteAgendService.js");
const SelectBetweenAgendsService = require("../services/SelectBetweenAgendsService.js");

const agendsRouter = express.Router();

agendsRouter.post("/", async (request, response) => {
  const { initial_time, final_time, description } = request.body;

  const createAgend = new CreateAgendService();

  const agend = await createAgend.execute(
    initial_time,
    final_time,
    description
  );

  return response.json(agend);
});

agendsRouter.get("/", async (request, response) => {
  const selectAgends = new SelectAllAgendService();

  const agends = await selectAgends.execute();

  return response.json(agends);
});

agendsRouter.get("/:date", async (request, response) => {
  const { date } = request.params;
  const selectBetweenAgends = new SelectBetweenAgendsService();

  const dateInitial = date;
  const dateFinal = date;

  const agends = await selectBetweenAgends.execute(dateInitial, dateFinal);

  return response.json(agends);
});

agendsRouter.get("/:date_initial/to/:date_final", async (request, response) => {
  const { date_initial, date_final } = request.params;
  const selectBetweenAgends = new SelectBetweenAgendsService();

  const dateInitial = date_initial;
  const dateFinal = date_final;

  const agends = await selectBetweenAgends.execute(dateInitial, dateFinal);

  return response.json(agends);
});

agendsRouter.delete("/:id_agend", async (request, response) => {
  const { id_agend } = request.params;
  console.log(id_agend);
  const deleteAgends = new DeleteAgendService();

  const agendDeleted = await deleteAgends.execute(id_agend);

  return response.json(agendDeleted);
});

module.exports = agendsRouter;
