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

        role: {
            type: 'json',
            columnType: 'array',
            defaultsTo: ['operator']
        },

        status: {
            type: 'string',
            isIn: ['active', 'inactive'],
            defaultsTo: 'active'
        },

        roles: {
            collection: 'role',
            via: 'users'
        }
    }
}


async function getRolesByUserId(userId) {

    var user =  await User.findOne(userId);

    if (!user) {

        let err = new Error(`Does not exists user has id ${userId}`);
        throw err;
    }

    return user.roles;
}