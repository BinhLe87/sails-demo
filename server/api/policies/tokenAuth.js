/**
 * tokenAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *(default res.forbidden() behavior can be overridden in `config/403.js`)
 */
module.exports = (req, res, next) => {

    // User is allowed, proceed to the next policy, 
    // or if this is the last policy, the controller
    const userToken = req.headers.authorization;
    console.log(userToken, req.headers, req.session)
    if (!userToken) return res.unauthorized();

    TokenAuthService.verifyToken(userToken, (err, decoded) => {
        if (err || !decoded ) return res.unauthorized();
        req.options.userId = decoded.sub;
        return next();
    });
};