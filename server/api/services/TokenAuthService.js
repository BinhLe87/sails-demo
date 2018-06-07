var jwt = require('jsonwebtoken');
const uuidV4 = require('uuid/v4');
const crypto = require('crypto');

module.exports = {
    generateToken: function (payload) {
        const currentTime = Math.round(new Date().getTime() / 1000);
        var tokenPayload = {
            iss: sails.config.crypto.tokenIssuer,
            sub: payload.userId,
            aud: payload.userPlatform,        // Audience is for our client application to validate the source of the token , if the audiaunce not match , then token will be reject all across the board
            exp: payload.tokenExpireTime ? currentTime + payload.tokenExpireTime : currentTime + sails.config.crypto.tokenExpireTime,
            iat: currentTime,
            jti: uuidV4()
        }
        return jwt.sign(tokenPayload, sails.config.crypto.tokenSecretKey);
    },
    generateTokenWithJTI: function (payload) {
        const currentTime = Math.round(new Date().getTime() / 1000);
        const unique_jti = uuidV4();
        var tokenPayload = {
            iss: sails.config.crypto.tokenIssuer,
            sub: payload.userId,
            aud: payload.userPlatform,        // Audience is for our client application to validate the source of the token , if the audiaunce not match , then token will be reject all across the board
            exp: payload.tokenExpireTime ? currentTime + payload.tokenExpireTime : currentTime + sails.config.crypto.tokenExpireTime,
            iat: currentTime,
            jti: unique_jti
        }
        return { jti: unique_jti, token: jwt.sign(tokenPayload, sails.config.crypto.tokenSecretKey) };
    },
    verifyToken: (token, cb) => {
        return jwt.verify(token, sails.config.crypto.tokenSecretKey, { issuer: sails.config.crypto.tokenIssuer }, cb);
    },
    decodeToken: (token) => {
        return jwt.decode(token);
    },
}