/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {
    tableName: "user",
    attributes: {
        userName: {
            type: 'string',
            required: true,
            unique: true,
            maxLength: 20
        },

        password: {
            type: 'string',
            required: true,
            protect: true
        },

        status: {
            type: 'string',
            isIn: ['active', 'inactive'],
            defaultsTo: 'active'
        },

        roles: {
            collection: 'role',
            via: 'users'
        },

    }
}

