import { createPassajeroValitation } from "../validation";

class CreatePassajeiroService {
  constructor(db) {
    this.db = db;
  }

  async execute(passajeiro) {
    await createPassajeroValitation(passajeiro);

    const existPass = await this.db.findOne({
      where: { cpf: passajeiro.cpf },
    });

    if (existPass) {
      throw new Error("this passajeiro already exists");
    }

    const response = await this.db.create(passajeiro);

    return response;
  }
}

export default CreatePassajeiroService;
