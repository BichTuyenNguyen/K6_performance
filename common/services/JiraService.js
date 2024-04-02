import { ApiHelper } from "../helpers/ApiHelper.js";
import { StringUtil } from "../utils/StringUtil.js";
import { DateTimeUtil } from "../utils/DateTimeUtil.js";

export class JiraService extends ApiHelper {
    jiraApiUrl
    createIssueUrl
    updateIssueStatusUrl
    jiraProjectId
    token

    constructor() {
        super();
        this.orgId = 3;
        this.token = "OkFXaG5CRjdsWWNsWnQzYWZEdWNjRkRENw==";
        this.jiraApiUrl = "https://qeautomationkatalon.atlassian.net/rest/api";
        this.createIssueUrl = this.jiraApiUrl + `/${this.orgId}/issue`;
        this.updateIssueStatusUrl = this.jiraApiUrl + `/${this.orgId}/issue` + "/%s/transitions";
        this.changeIssueSummaryUrl = this.jiraApiUrl + `/${this.orgId}/issue/%s`
    }

    createIssue(jiraProjectId, issueType, summary) {
        let body = {
            "fields": {
                "issuetype": {
                    "id": issueType
                },
                "project": {
                    "id": jiraProjectId
                },
                "summary": summary
            }
        };
        return this.postCookie(this.createIssueUrl, this.token, body);
    }

    changeIssueSummary(issueKey, summary) {
        let body = {
            "fields": {
                "summary": `${summary}` + " update " + DateTimeUtil.getCurrentTime()
            }
        }
        return this.putCookie(StringUtil.parse(this.changeIssueSummaryUrl, issueKey), this.token, body);
    }

    updateIssueStatus(issueKey, issueId) {
        let body = {
            "transition": {
                "id": "21",
                "name": "In Progress",
                "hasScreen": false,
                "isGlobal": true,
                "isInitial": false,
                "isConditional": false,
                "isLooped": false,
                "to": {
                    "id": issueId,
                    "name": "In Progress",
                    "statusCategory": {
                        "id": 4
                    }
                }
            }
        };
        console.log("======url: " + StringUtil.parse(this.updateIssueStatusUrl, issueKey))
        return this.postCookie(StringUtil.parse(this.updateIssueStatusUrl, issueKey), this.token, body)
    }
}
