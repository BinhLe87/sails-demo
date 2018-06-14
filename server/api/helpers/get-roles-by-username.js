module.exports = {

    inputs: {

        username: {

            type: 'string',
            require: true
        },

        userModel: {

            type: 'ref'
        },
    },

    exits: {

        UserNotFoundError: {

        }
    },


    fn: async function (inputs, exits) {

        var username = inputs.username;
        var userModel = inputs.userModel || User;

        var userWithRoles = await userModel.findOne({userName: username}).populate('roles').intercept((err)=>{

            return exits.error(err);
        });

        if (!userWithRoles) {

            return exits.UserNotFoundError();
        }

        return exits.success(userWithRoles.roles);
    }
}