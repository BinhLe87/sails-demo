module.exports = {

    inputs: {

        role: {

            type: 'string',
            require: true
        },

        roleModel: {

            type: 'ref'
        },
    },

    exits: {

        RoleNotFoundError: {

        }
    },

    fn: async function (inputs, exits) {

        var roleName = inputs.role;
        var roleModel = inputs.roleModel || Role;

        var roleWithPermissions = await roleModel.findOne({roleName: username}).populate('permissions').intercept((err)=>{

            return exits.error(err);
        });

        if (!roleWithPermissions) {

            return exits.RoleNotFoundError();
        }

        return exits.success(roleWithPermissions.permissions);
    }
}