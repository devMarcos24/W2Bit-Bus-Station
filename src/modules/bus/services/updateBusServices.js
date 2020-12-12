import { updateBusValidation } from "../validation";

class updateBusServices {
  constructor(db) {
    this.db = db;
  }

  async execute({ id, bus }) {
    if (!id) {
      throw new Error("please send the id of your bus");
    }

    await updateBusValidation(bus);

    let response = await this.db.findOne({ where: { id } });

    if (bus.placa && response) {
      if (bus.placa === response.placa) {
        throw new Error(
          "You cannot edit your placa because has a bus with this placa"
        );
      }
    }

    if (!response) {
      throw new Error("This bus is not exists");
    }

    await this.db.update(bus, { where: { id } });

    response = await this.db.findOne({ where: { id } });

    return response;
  }
}

export default updateBusServices;
