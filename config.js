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
        "matchHost": "renotest.jfrog.io",
        "username": "process.env.RENOVATE_ART_SECRET_USERNAME",
        "password": "process.env.RENOVATE_ART_SECRET_PASSWORD",
        "hostType": "docker" 
      }
    ]
  }