import CreateUserService from "../services/createUserSevice";
import UpdateUserService from "../services/updateUserService";
import SessionsUserService from "../services/sessionsUserServices";

let database;

class UserController {
  constructor(db) {
    database = db;
  }

  async index(req, res) {
    const user = req.body;

    try {
      const createUserService = new CreateUserService(database);
      console.log("aqio");
      const response = await createUserService.execute(user);
      console.log("aqio2");

      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    const update = req.body;
    try {
      const updateUserService = new UpdateUserService(database);

      const response = await updateUserService.execute({
        user_id: req.user.id,
        update,
      });

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async sessions(req, res) {
    const { email, password } = req.body;

    try {
      const sessionsUserService = new SessionsUserService(database);

      const response = await sessionsUserService.execute({ email, password });

      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default UserController;
