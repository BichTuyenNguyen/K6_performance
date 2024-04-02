import { ApiHelper } from "../helpers/ApiHelper.js";
import { EnviromentConfig } from "../config/envConfig.js";
import { StringUtil } from "../utils/StringUtil.js";

class ExternalIssueService extends ApiHelper {
  constructor() {
    super();
    const envConfig = new EnviromentConfig();
    this.linkExternalIssueUrl = `${envConfig.testOpsApiUrl}/v${envConfig.version}/external-issue?projectId=%s`;
  }

  linkExternalIssue(projectId, issueKey, objectId) {
    const body = {
      issueId: issueKey,
      objectType: "EXECUTION_TEST_RESULT",
      objectId: objectId,
    };
    const url = StringUtil.parse(this.linkExternalIssueUrl, projectId);
    const token = new EnviromentConfig().token;
    return this.post(url, token, body);
  }
}

export default ExternalIssueService;
