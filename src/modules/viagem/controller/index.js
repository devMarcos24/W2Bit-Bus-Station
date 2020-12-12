import CreateViagemService from "../services/createViagemService";

let database;

class ViagemController {
  constructor(db) {
    database = db;
  }

  async create(req, res) {
    try {
      const { busId, passajeiroId } = req.query;
      const createViagemService = new CreateViagemService(database);

      const response = await createViagemService.execute({
        busId,
        passajeiroId,
      });

      return res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({ error: error.message });
    }
  }
}

export default ViagemController;
