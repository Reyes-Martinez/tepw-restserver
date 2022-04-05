const expressJwt = require("express-jwt");

function authJwt() {
  const secret = process.env.SECRET;
  const api = "/api";
  return expressJwt({
    secret,
    algorithms: ["HS256"],
    isRevoked: isRevoked,
  }).unless({
    path: [
      { url: /\/api\/post(.*)/, methods: ["GET", "OPTIONS"] },
      { url: /\/api\/comment(.*)/, methods: ["GET", "OPTIONS"] },
      { url: /\/api\/categories(.*)/, methods: ["GET", "OPTIONS"] },
      `${api}/user/login`,
      `${api}/user/register`,
    ],
  });
}

async function isRevoked(req, payload, done) {
  if (!payload.isAdmin) {
    done(null, true);
  }

  done();
}
module.exports = authJwt;
