import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import AuthConfig from "../../../config/auth";

class CreateUserService {
  constructor(db) {
    this.db = db;
  }

  async execute({ email, password }) {
    const user = await this.db.findOne({ where: { email } });

    if (!user) {
      throw new Error("email/password is invalid");
    }

    const verifyPassword = await compare(password, user.password_hash);

    if (!verifyPassword) {
      throw new Error("email/password is invalid");
    }

    const token = sign({}, AuthConfig.jwt.secret, {
      subject: user.id.toString(),
      expiresIn: AuthConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}

export default CreateUserService;
