module.exports = {

    inputs: {
        
        roleName: {

            type: 'string',
            require: true
        },

        roleModel: {

            type: 'ref'
        },

        permissions: {

            type: 'ref',   //array type
            require: true
        },

        permissionModel: {

            type: 'ref'
        }

    },

    exits: {

        RoleNotFoundError: {

        },
        InvalidPermissionsError: {

            description: `Permissions must be an array, but got invalid format.`
        }
    },


    fn: async function (inputs, exits) {

        var roleName = inputs.roleName;
        var roleModel = inputs.roleModel || Role;

        var permissions = inputs.permissions;

        var roleNeedAssign = await roleModel.findOne({name: roleName});

        if (!roleNeedAssign) {

            throw 'RoleNotFoundError';
        }

        if (!Array.isArray(permissions)) {

            throw 'InvalidPermissionsError';
        }

        for (let permission of permissions) {

            await roleModel.addToCollection(roleNeedAssign.id, 'permissions').members(permission.id);
        }
        
        return exits.success();

    }
}