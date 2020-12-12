import { createBusValidation } from "../validation";

class createBusServices {
  constructor(db) {
    this.db = db;
  }

  async execute(bus) {
    if (bus.placa) {
      const response = await this.db.findOne({ where: { placa: bus.placa } });

      if (response) {
        throw new Error(
          "this bus already cadastred please try cadastre other bus"
        );
      }
    }

    await createBusValidation(bus);

    const response = await this.db.create({ ...bus });

    return response;
  }
}

export default createBusServices;
