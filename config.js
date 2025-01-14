module.exports = {
    platform: 'github',
    repositories: [{repository: 'yoyoIgnitor/go-test',
                    secrets: {
                    app_id: "process.env.APP_ID",
                    private_key: "process.env.PRIVATE_KEY"
                    }}],
    onboardingConfig: {"$schema": "https://docs.renovatebot.com/renovate-schema.json"},
    extends: ["local>yoyoIgnitor/renovate-custom"]
