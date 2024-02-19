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
        "matchHost": "hub.docker.com",
        "hostType": "docker",           
      }
    ]
  }