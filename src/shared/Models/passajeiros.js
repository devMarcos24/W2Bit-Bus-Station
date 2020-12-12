import Sequelize, { Model } from "sequelize";

class passajeiros extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        cpf: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      {
        sequelize: connection,
      }
    );
    return this;
  }
}

export default passajeiros;
