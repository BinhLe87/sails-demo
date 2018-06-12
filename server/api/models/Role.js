/**
 * Role.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentatison/concepts/models-and-orm/models
 */

  module.exports = {
    tableName: "role",
    attributes: {
        name: {
            type: 'string',
            isIn: ['admin', 'operator', 'service_admin', 'service_operator'],
            required: true
        },

        description: {
            type: 'string'
        },

        status: {
            type: 'string',
            isIn: ['active', 'inactive'],
            defaultsTo: 'active'
        },

        users: {
            collection: 'user',
            via: 'roles'
        }
    }
}