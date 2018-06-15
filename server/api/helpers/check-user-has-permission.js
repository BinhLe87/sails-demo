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

        
        var getRolesByUserNameAsyncF = sails.helpers.getRolesByUsername.with({ username: userName })
            .intercept('UserNotFoundError', (err) => {

                throw 'UserNotFoundError';
            });

        var permissionRequireRoles;
        var userHasRoles;
        if (permissionID) { //find by permissionID

            var getPermissionByIDAsyncF = permissionModel.findOne({id: permissionID}).populate('roles').toPromise();
            var [userHasRoles, found_permission] = await Promise.all([getRolesByUserNameAsyncF, getPermissionByIDAsyncF]);

            if(!found_permission) throw 'PermissionNotFoundError'; 

            permissionRequireRoles = found_permission.roles;
        } else { //find by compound key is 'api' field + 'action' field
            
            userHasRoles = await getRolesByUserNameAsyncF;
            // in term of 'api' field, it is considered matching if it is a substring of request.url
            // Since waterline not support this feature matching, so will handle manually. First, search by 'action' field. 
            // Second, use regular expression in JS to filter 'api' one more time.
            var matchedPermissionsByAction = await permissionModel.find({action: action}).populate('roles');

            var matchedPermissions = _.filter(matchedPermissionsByAction, function(permission) {

                return api.indexOf(permission.api) > -1;
            });

            if (_.isEmpty(matchedPermissions)) throw 'PermissionNotFoundError';

            permissionRequireRoles = _.reduce(matchedPermissions, (accumulator, curValue) => {

                accumulator.push(...curValue.roles);

                return accumulator;
            }, []);
        }

        if (_.intersectionBy(userHasRoles, permissionRequireRoles, 'id').length == 0) {

            throw 'InsufficientPermissionsError';
        }

        return exits.success();
    }

}