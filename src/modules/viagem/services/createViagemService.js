import BusDB from "../../../shared/Models/buses";
import PassDB from "../../../shared/Models/passajeiros";

class CreateViagemService {
  constructor(db) {
    this.db = db;
  }

  async execute({ busId, passajeiroId }) {
    if (!busId || !passajeiroId) {
      throw new Error("for continue you need to send the busId/passajeiroId");
    }

    const Bus = await BusDB.findOne({ where: { id: busId } });
    const Pass = await PassDB.findOne({ where: { id: passajeiroId } });

    if (!Bus || !Pass) {
      throw new Error("this bus|passajeiro is no cadastred");
    }

    const passVerify = await this.db.findOne({
      where: { passajeiroId: parseInt(passajeiroId) },
    });

    if (passVerify) {
      throw new Error("this passajeiro already go travel in a bus");
    }

    const viageVerify = await this.db.findAll({
      where: { busId: parseInt(busId) },
    });

    if (viageVerify.length >= Bus.acentos) {
      throw new Error("This bus already is fully");
    }

    const viagem = await this.db.create({
      busId: parseInt(busId),
      passajeiroId: parseInt(passajeiroId),
      passajeiroName: Pass.name,
    });

    return viagem;
  }
}

export default CreateViagemService;
