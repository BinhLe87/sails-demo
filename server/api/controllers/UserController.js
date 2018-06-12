module.exports = {
    /**
    * @typedef success
    * @property {string} status
    * @property {object} data
    */

    /**
     * @typedef AccessToken
     * @property {string} status
     * @property {object} data
     * @property {string} data.token
     * @property {integer} data.expire
     */

    /**
    * Create User
    * @route POST /blockpass_developer/api/user/create
    * @group user - Operations about user
    * @param {string} user_name.query.required - username
    * @param {string} password.query.required - user's password.
    * @returns {object} 200 - An array of user info
    * @returns {Error}  default - Unexpected error
    */
    create: async function (req, res) {
        try {
            let userName = req.param('user_name')
            let password = req.param('password')
            let role = req.param('role')

            if (!userName) {
                return res.error({ code: 400, mssg: "Missing User Name" })
            }

            if (!password) {
                return res.error({ code: 400, mssg: "Missing Password" })
            }

            let user = await User.findOne({ userName: userName })
            if (user) {
                return res.error({ code: 400, mssg: "User Name has been used" })
            }
            password = Utils.sha256(password)
            await User.create({ userName: userName, password: password })

            return res.json()
        } catch (error) {
            sails.log.error("[UserController - create] Write to db error", error)
            return res.error({ code: 500, mssg: "Unable to connect to database", data: error })
        }
    },
    /**
    * User Login
    * @route PUT /blockpass_developer/api/user/login
    * @group user - Operations about user
    * @param {string} user_name.query.required - username
    * @param {string} password.query.required - user's password.
    * @returns {object} 200 - An array of user info
    * @returns {Error}  default - Unexpected error
    */
    login: async function (req, res) {
        try {
            let userName = req.param('user_name')
            let password = req.param('password')
            if (!userName) {
                return res.error({ code: 400, mssg: "Missing User Name" })
            }

            if (!password) {
                return res.error({ code: 400, mssg: "Missing Password" })
            }

            password = Utils.sha256(password)

            let user = await User.findOne({ userName: userName, password: password, status: 'active' })

            if (!user) {
                return res.error({ code: 404, mssg: "User Not Found" })
            }

            let accessToken = TokenAuthService.generateTokenWithJTI({
                userId: user._id,
                platform: "web"
            })

            req.session.cookie.maxAge = sails.config.crypto.tokenExpireTime;
            req.session.tokenId = accessToken.jti;

            return res.success({
                accessToken: accessToken.token,
                expiry: sails.config.crypto.tokenExpireTime
            })

        } catch (error) {
            sails.log.error("[UserController - login] Read db error", error)
            return res.error({ code: 500, mssg: "Unable to connect to database", data: error })
        }
    },
    /**
    * User Logout
    * @route POST /blockpass_developer/api/user/logout
    * @group user - Operations about user
    * @param {string} user_name.query.required - username
    * @param {string} password.query.required - user's password.
    * @returns {object} 200 - An array of user info
    * @returns {Error}  default - Unexpected error
    */
    logout: async function (req, res) {
        delete req.session.tokenId;
        return res.success()
    }
}