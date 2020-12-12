import CreatePassajeiroService from "../services/createPassajeiroService";
import UpdatePassajeiroService from "../services/updatePassajeiroService";
import DeletePassajeiroService from "../services/deletePassajeiroService";

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

  async update(req, res) {
    const { id } = req.params;
    const passajeiro = req.body;
    try {
      const updatePassajeiroService = new UpdatePassajeiroService(database);

      const response = await updatePassajeiroService.execute({
        id,
        passajeiro,
      });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const passajeiro = req.body;
    try {
      const deletePassajeiroService = new DeletePassajeiroService(database);

      const response = await deletePassajeiroService.execute({
        id,
      });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default passajeirosController;
