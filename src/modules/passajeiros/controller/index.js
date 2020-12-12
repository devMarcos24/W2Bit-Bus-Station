import CreatePassajeiroService from "../services/createPassajeiroService";

let database;

class passajeirosController {
  constructor(db) {
    database = db;
  }

  async create(req, res) {
    const passajeiro = req.body;
    try {
      const createPassajeiroService = new CreatePassajeiroService(database);

      const response = await createPassajeiroService.execute(passajeiro);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default passajeirosController;
