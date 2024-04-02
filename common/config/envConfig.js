export class EnviromentConfig {
  testOpsApiUrl
  version
  token
  
  constructor() {
    console.log('========== ENV.ENV: ' + __ENV.ENV)
    if (__ENV.ENV == "staging") {
      this.testOpsApiUrl = "https://testops.staging.katalon.com/api"
      this.token = "UUVBdXRvbWF0aW9uS2F0YWxvbkBnbWFpbC5jb206UUVBdXRvS0B0YWxvbjEyMw=="
      this.version = 1
    }

    if (__ENV.ENV == "qa") {
      this.testOpsApiUrl = "https://testops.qa.katalon.com/api"
      this.version = 1
      this.token = "UUVBdXRvbWF0aW9uS2F0YWxvbkBnbWFpbC5jb206UUVBdXRvS0B0YWxvbjEyMw=="
    }
  }
}