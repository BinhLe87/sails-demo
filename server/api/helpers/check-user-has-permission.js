module.exports = {

    inputs: {

        username: {

            type: 'string',
            require: true
        },

        userModel: {

            type: 'ref'
        },

        permissionID: {

            type: 'string'
        },

        api: {

            type: 'string'
        },

        action: {

            type: 'string'
        },

        permissionModel: {

            type: 'ref'
        }
    },

    exits: {

        MissingPermissionArgumentError: {

            description: `Must input either permission_id or compound key is 'api' argument and 'action' argument. 
            If both of them are available, the permission_id take higher precedence`
        },
        UserNotFoundError: {

        },
        PermissionNotFoundError: {

            description: `Permission is not yet defined`
        },
        InsufficientPermissionsError: {

        }
    },

    fn: async function (inputs, exits) {

        var userName = inputs.username;
        var userModel = inputs.userModel || User;
        var permissionModel = inputs.permissionModel || Permission;

        //identify permission_key to find, it accept either permission_id or compound key is api + action
        //if both of them are available, the permission_id take higher precedence
        var permissionID = inputs.permissionID;
        var api = inputs.api;
        var action = inputs.action;
        var permissionCriteria;

        if (!permissionID && (!api || !action)) {

            throw 'MissingPermissionArgumentError';
        }

        permissionCriteria = permissionID ? { id: permissionID }
            : Object.assign({}, { api: api }, { action: action });

        var getRolesByUserNameAsyncF = sails.helpers.getRolesByUsername.with({ username: userName })
            .intercept('UserNotFoundError', (err) => {

                throw 'UserNotFoundError';
            });

        var getRolesByPermissionIDAsyncF = permissionModel.findOne(permissionCriteria).populate('roles').toPromise();

        var [roles, permission] = await Promise.all([getRolesByUserNameAsyncF, getRolesByPermissionIDAsyncF]);

        if (!permission) {

            throw 'PermissionNotFoundError';
        }

        if (_.intersectionBy(roles, permission.roles, 'id').length == 0) {

            throw 'InsufficientPermissionsError';
        }

        return exits.success();
    }

}