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

        return res.error(new sails.config.errors.MissingRequiredError('User name is required.'));
    }

    sails.helpers.getRolesByUsername.with({username: userName, userModel: User})
                    .intercept('UserNotFoundError', (err) => {

                        return res.error(new sails.config.errors.ResourceNotFoundError(`User name '${userName}' does not exists.`))
                    }).intercept((err) => {

                        return res.error(new sails.config.errors.GenericError(undefined, err));
                    }).then((roles) => {

                        return res.success(roles);
                    });

};

