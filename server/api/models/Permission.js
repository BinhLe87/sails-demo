/**
 * Permission.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentatison/concepts/models-and-orm/models
 */

module.exports = {
    tableName: "permission",
    attributes: {
        name: {
            type: 'string',
        },

        api: {

            type: 'string',
            required: true
        },

        action: {

            type: 'string'
        },

        roles: {
            collection: 'role',
            via: 'permissions'
        },

        status: {
            type: 'string',
            isIn: ['active', 'inactive'],
            defaultsTo: 'active'
        },
    }, 
    indexes: [
        //event & match composite index
        {
          attributes: {
            api: 1,    // asc
            action: 1         // asc
          },
          options: {
            unique: true,
            name: 'api_action'
          }
        }
      ]
}