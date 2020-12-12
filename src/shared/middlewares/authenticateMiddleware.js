import jwt from "jsonwebtoken";

import authConfig from "../../config/auth";

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: "JWT token is missing" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret);

    const { sub } = decoded;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    return response.status(401).json({ error: "JWT token is missing" });
  }
}

export default ensureAuthenticated;
