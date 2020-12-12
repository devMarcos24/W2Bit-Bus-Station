import { hash } from "bcrypt";

import { createUserValidation } from "../validation";

class CreateUserService {
  constructor(db) {
    this.db = db;
  }

  async execute(user) {
    await createUserValidation(user);

    if (user.password != user.confirmPassword) {
      throw new Error("the passwords do not is similar");
    }

    const existsUser = await this.db.findOne({ where: { email: user.email } });

    if (existsUser) {
      throw new Error("user already exists please try with other email");
    }

    const passwordHash = await hash(user.password, 8);

    const response = await this.db.create({
      ...user,
      url_foto:
        "https://cycle-uploads.s3.amazonaws.com/625e5d83defd83e861b334db0f559588-link-attach-user-icon-png_127466.jpg",
      password_hash: passwordHash,
    });

    response.password_hash = undefined;

    return response;
  }
}

export default CreateUserService;
