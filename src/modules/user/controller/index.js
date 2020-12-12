import CreateUserService from "../services/createUserSevice";
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
