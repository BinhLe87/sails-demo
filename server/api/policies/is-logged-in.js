/**
 * is-logged-in
 *
 * A simple policy that allows any request from an authenticated user.
 *
 * For more about how to use policies, see:
 *   https://sailsjs.com/config/policies
 *   https://sailsjs.com/docs/concepts/policies
 *   https://sailsjs.com/docs/concepts/policies/access-control-and-permissions
 */
module.exports = async function (req, res, proceed) {

    if (req.session.userId && req.session.hashed) {
        if (req.session.hashed === Utils.sha256(req.session.userId + sails.config.custom.salt)) {
            return proceed()
        }
    }

    return res.unauthorized();
};
