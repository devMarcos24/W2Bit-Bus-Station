import Sequelize, { Model } from "sequelize";

class viagens extends Model {
  static init(connection) {
    super.init(
      {
        busId: Sequelize.INTEGER,
        passajeiroId: Sequelize.INTEGER,
        passajeiroName: Sequelize.STRING,
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

export default viagens;
