export const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  database: {
    connectionUri: process.env.MONGO_URI,
  },
  jwtSecret: process.env.JWT_SECRET,
  tokenExpirationTime: parseInt(process.env.TOKEN_EXPIRATION_TIME) || 36000,
  hashSaltRounds: parseInt(process.env.HASH_SALT_ROUNDS) || 10,
});
