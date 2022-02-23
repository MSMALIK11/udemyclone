import expressjwt from "express-jwt";

export const requireSignin = expressjwt({
  getTokens: (req, res) => req.cookie.jwt,
  secret: `${process.env.JWT_SECRET}`,
  algorithms: ["HS256"],
});
