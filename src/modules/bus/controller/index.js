import CreateBusServices from "../services/createBusServices";
import ListAllBusServices from "../services/listAllBusServices";
import ListBusServices from "../services/listBusServices";
import UpdateBusServices from "../services/updateBusServices";
import DeleteBusServices from "../services/deleteBusServices";

let database;
class busController {
  constructor(db) {
    database = db;
  }

  async create(req, res) {
    const bus = req.body;
    try {
      const createBusServices = new CreateBusServices(database);

      const response = await createBusServices.execute(bus);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async index(req, res) {
    try {
      const listAllBusServices = new ListAllBusServices(database);

      const response = await listAllBusServices.execute();

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const listBusServices = new ListBusServices(database);

      const response = await listBusServices.execute({ id });

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const bus = req.body;

    try {
      const updateBusServices = new UpdateBusServices(database);

      const response = await updateBusServices.execute({ id, bus });

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const deleteBusServices = new DeleteBusServices(database);

      const response = await deleteBusServices.execute({ id });

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default busController;
