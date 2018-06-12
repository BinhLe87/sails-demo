/**
 * roleAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authorization user
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *(default res.forbidden() behavior can be overridden in `config/403.js`)
 */
module.exports = (req, res, next) => {

    let userName = req.param('user_name');

    if(!userName) {

        
    }

};