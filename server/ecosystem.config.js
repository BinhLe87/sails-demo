module.exports = {
    apps: [
        {
            name: "blockpass_developer",
            script: "./app.js",
            env: {
                "NODE_ENV": "development"
            },
            env_custom: {
                "NODE_ENV": "production",
                "SALT": ENV_SALT,
                "BIND_PORT": ENV_BIND_PORT,
                "BLOCKPASS_HOST": ENV_BLOCKPASS_HOST,
                "MONGODB_API_PASSWORD": ENV_MONGO_PASS,
                "MONGODB_API_HOST": ENV_MONGO_HOST,
                "MONGODB_API_PORT": ENV_MONGO_PORT
            }
        }
    ]
}
