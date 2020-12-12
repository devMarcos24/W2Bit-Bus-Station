import { updatePassajeroValitation } from "../validation";

class UpdatePassajeiroService {
  constructor(db) {
    this.db = db;
  }

  async execute({ id, passajeiro }) {
    await updatePassajeroValitation(passajeiro);

    if (passajeiro.cpf) {
      throw new Error("You cannot change the CPF");
    }

    let existPass = await this.db.findOne({
      where: { id },
    });

    if (!existPass) {
      throw new Error("this passajeiro do not exists");
    }

    await this.db.update(passajeiro, {
      where: { id },
    });

    existPass = await this.db.findOne({
      where: { id },
    });

    return existPass;
  }
}

export default UpdatePassajeiroService;
