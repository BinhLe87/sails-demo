module.exports = {
    /**
    * Create User
    * @route POST /api/user/create
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
                return res.err({ code: 400, mssg: "Missing User Name" })
            }

            if (!password) {
                return res.err({ code: 400, mssg: "Missing Password" })
            }

            password = Utils.sha256(password)
            await User.create({ userName: userName, password: password })

            return res.json()
        } catch (error) {
            sails.log.error("[UserController - create] Write to db error", error)
            return res.error({})
        }
    },
    /**
    * User Login
    * @route PUT /api/user/login
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
                return res.err({ code: 400, mssg: "Missing User Name" })
            }

            if (!password) {
                return res.err({ code: 400, mssg: "Missing Password" })
            }

            password = Utils.sha256(password)

            let user = await User.findOne({ userName: userName, password: password, status: 'active' })

            if (!user) {
                return res.err({ code: 404, mssg: "User Not Found" })
            }

            req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;
            req.session.userId = user.id;
            req.session.hashed = Utils.sha256(user.id + sails.config.custom.salt)

            return res.success()
        } catch (error) {
            sails.log.error("[UserController - login] Read db error", error)
            return res.err({ code: 500, mssg: "Unable to connect to database", data: error })
        }
    },
    /**
    * User Logout
    * @route POST /api/user/logout
    * @group user - Operations about user
    * @param {string} user_name.query.required - username
    * @param {string} password.query.required - user's password.
    * @returns {object} 200 - An array of user info
    * @returns {Error}  default - Unexpected error
    */
    logout: async function (req, res) {
        // delete req.session.userId;
        return res.json({ status: "success", data: req.session.userId })
    }
}