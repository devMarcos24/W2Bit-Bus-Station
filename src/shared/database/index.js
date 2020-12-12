import { Sequelize } from "sequelize";

import databaseConfig from "../../config/database";
import User from "../Models/users";
import Bus from "../Models/buses";
import Passajeiro from "../Models/passajeiros";

const models = [User, Bus, Passajeiro];

class Database {
  constructor() {
    this.init();
  }

  init() {
    const sequelize = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(sequelize))
      .map((model) => model.associate && model.associate(sequelize.models));
  }
}

export default new Database();
