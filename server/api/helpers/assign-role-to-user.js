module.exports = {

    inputs: {

        userName: {

            type: 'string',
            require: true
        },

        userModel: {

            type: 'ref'
        },
        
        roleName: {

            type: 'string',
            require: true
        },

        roleModel: {

            type: 'ref'
        }

    },

    exits: {

        UserNotFoundError: {

        },
        RoleNotFoundError: {

        },
        RoleAlreadyExists: {

        }
    },


    fn: async function (inputs, exits) {

        var userName = inputs.userName;
        var userModel = inputs.userModel || User;
        var roleName = inputs.roleName;
        var roleModel = inputs.roleModel || Role;

        var userWithRoles = await userModel.findOne({userName: userName}).populate('roles');

        if (!userWithRoles) {

            throw 'UserNotFoundError';
        }

        if (_.filter(userWithRoles.roles, ['name', roleName]).length > 0 ) {

            throw 'RoleAlreadyExists';
        }

        var roleWillAssign = await roleModel.findOne({name: roleName});

        if (!roleWillAssign) {

            throw 'RoleNotFoundError';
        }

        await userModel.addToCollection(userWithRoles.id, 'roles').members(roleWillAssign.id);

        return exits.success();

    }
}