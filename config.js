module.exports = {
    platform: 'github',
    repositories: [{repository: 'yoyoIgnitor/test-custom',
                    secrets: {
                    app_id: "process.env.APP_ID",
                    private_key: "process.env.PRIVATE_KEY"
                    }}],
    onboardingConfig: {"$schema": "https://docs.renovatebot.com/renovate-schema.json"},
    extends: ["local>yoyoIgnitor/renovate-custom"],
    username: 'test', 
    "hostRules": [
      {
        "matchHost": "docker.io",
        "username": "process.env.DOCKER_USERNAME",
        "password": "process.env.DOCKER_PASSWORD",
        "hostType": "docker" 
      }
    ]
  }