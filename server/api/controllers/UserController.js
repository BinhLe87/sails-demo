module.exports = {
    /**
    * This function comment is parsed by doctrine
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

            if (!userName) {
                return res.err({ code: 400, mssg: "Missing User Name" })
            }

            if (!password) {
                return res.json({ code: 400, mssg: "Missing Password" })
            }

            password = Utils.sha256(password)
            await User.create({ userName: userName, password: password })
            return res.json({ status: "success", result: req.param('test') })
        } catch (error) {
            sails.log.error("[UserController - create] Write to db error", error)
            return res.error({})
        }
    },
    /**
    * This function comment is parsed by doctrine
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
                return res.json({ "status": "Missing param" })
            }

            if (!password) {
                return res.json({ "status": "Missing param" })
            }

            password = Utils.sha256(password)

            let user = await User.findOne({ userName: userName, password: password, status: 'active' })

            if (!user) {
                return res.json({ status: "User not found" })
            }

            req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;
            req.session.userId = user.id;
            req.session.hashed = Utils.sha256(user.id + sails.config.custom.salt)

            return res.json({ status: "success" })
        } catch (error) {
            sails.log.error("[UserController - login] Read db error", error)
            return res.serverError("Internal Server Error")
        }
    },
    /**
    * This function comment is parsed by doctrine
    * @route POST /api/user/logout
    * @group user - Operations about user
    * @param {string} user_name.query.required - username
    * @param {string} password.query.required - user's password.
    * @returns {object} 200 - An array of user info
    * @returns {Error}  default - Unexpected error
    */
    logout: async function (req, res) {
        // delete req.session.userId;
        return res.json({ status: "success", detail: req.session.userId })
    }
}