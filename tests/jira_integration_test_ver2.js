import { check } from 'k6';
import { JiraService } from '../common/services/JiraService.js';
import { ExternalIssueService } from '../common/services/ExternalIssueService.js';

export const options = {
    stages: [
        { duration: '3s', target: 3 },
        { duration: '2s', target: 2 },
        { duration: '3s', target: 1 },
    ],
};

export default function () {
    const jiraService = new JiraService();
    const externalIssueService = new ExternalIssueService();

    // 1. Create issue:
    let issueType = 10007;
    let jiraProjectId = 10021;
    let summary = "performance 08-03-2023";

    const createResponse = jiraService.createIssue(jiraProjectId, issueType, summary);

    console.log('createResponse status: ' + createResponse.status);
    if (createResponse.status != 201) console.log('createResponse: ' + JSON.stringify(createResponse.body, null, 2));

    check(createResponse, {
        'createResponse: status is 201': (r) => r.status === 201
    });
    
    // 2. Link issue:
    let issueKey = createResponse.json().key;
    let projectId = 375989
    let objectId = 102790538;

    let linkIssueWithJiraResponse = externalIssueService.linkExternalIssue(projectId, issueKey, objectId);

    console.log('linkIssueWithJiraResponse status: ' + linkIssueWithJiraResponse.status);
    if (linkIssueWithJiraResponse.status != 200) {
        console.log('linkIssueWithJiraResponse: ' + JSON.stringify(linkIssueWithJiraResponse.body));
    }
    check(linkIssueWithJiraResponse, {
        'linkIssueWithJiraResponse: status is 200': (r) => r.status === 200
    });

    // 3. Change issue summary:
    let changeIssueSummaryResponse = jiraService.changeIssueSummary(issueKey, summary)

    console.log('changeIssueSummaryResponse status: ' + changeIssueSummaryResponse.status);
    if (changeIssueSummaryResponse.status != 204) {
        console.log('changeIssueSummaryResponse: ' + JSON.stringify(changeIssueSummaryResponse.body));
    }
    check(changeIssueSummaryResponse, {
        'changeIssueSummaryResponse: status is 204': (r) => r.status === 204
    })
}


