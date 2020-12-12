import Sequelize, { Model } from "sequelize";

class bus extends Model {
  static init(connection) {
    super.init(
      {
        placa: Sequelize.STRING,
        ano: Sequelize.INTEGER,
        modelo: Sequelize.STRING,
        acentos: Sequelize.INTEGER,
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

export default bus;
