/**
 * roleAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authorization user
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *(default res.forbidden() behavior can be overridden in `config/403.js`)
 */
module.exports = (req, res, next) => {

   var userName = req.param('user_name');

   var action = req.method;
   var api = req.url

   sails.helpers.checkUserHasPermission
        .with({username: userName, api: api, action: action})
        .intercept('UserNotFoundError', (err) => {

            return res.error(new sails.config.errors.ResourceNotFoundError(`User name '${userName}' does not exists.`))
        })
        .intercept('MissingPermissionArgumentError', (err) => {

            sails.log.error(err);
            return res.error(new sails.config.errors.GenericError(undefined, err)); 
        })
        .intercept('InsufficientPermissionsError', (err) => {
            
            return res.error(new sails.config.errors.PermissionDeniedError(`You do not have permission to make this API call.`))
        })
        .intercept('PermissionNotFoundError', (err) => {

            err.detail = `Permission is not yet defined for request ${req.method} ${req.url}`;
             
            sails.log.error(err);
            return res.error(new sails.config.errors.PermissionDeniedError(
                `You do not have permission to make this API call.`,
                err
            ));
        })
        .intercept((err) => {

            return res.error(new sails.config.errors.GenericError(undefined, err));
        }).then(() => {

            return next();
        });

};

