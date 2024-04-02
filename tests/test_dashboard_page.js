import { check } from 'k6';
import { SearchBody } from '../common/models/SearchBody.js';
import { SearchService } from '../common/services/SearchService.js';
import { Condition } from '../common/models/Condition.js';
import { Functions } from '../common/models/Functions.js';
import { Pagination } from '../common/models/Pagination.js';

const data = JSON.parse(open("../common/data/data.json"));

export const options = {
  stages: [
    { duration: '3s', target: 1 },
  ],
};

export default function () {
  let projectId
  if (__ENV.ENV == "staging") {
    projectId = data.staging.default.projectId
  }
  else {
    projectId = data.qa.default.projectId
  }

  const searchService = new SearchService();
  var projectCondition = new Condition("Project.id", "=", projectId);

  // 1. Search: Flaky Test
  var flakyTestBody = new SearchBody("TestCaseFlakinessStatistics", [projectCondition]);
  const flakyTestResponse = searchService.search(flakyTestBody)
  check(flakyTestResponse, {
    'flakyTestResponse: status is 200': (r) => r.status === 200
  });

  // 2. Search: Test Case
  var beginCondition = new Condition("createdAt", ">=", "2022-08-31T17:00:00.000Z");
  var endCondition = new Condition("createdAt", "<=", "2023-02-16T16:59:59.999Z");
  var testCaseBody = new SearchBody();
  testCaseBody.type = "TestCase";
  testCaseBody.conditions = [beginCondition, endCondition, projectCondition];
  testCaseBody.functions = [
    new Functions("totalTestCases", "count", ["id"]),
    new Functions("time", "group_by_month", ["createdAt"]),
  ];
  testCaseBody.pagination = new Pagination(0, 300, ["totalTestCases, asc"])
  const testCaseResponse = searchService.search(testCaseBody)
  check(testCaseResponse, {
    'flakyTestResponse: status is 200': (r) => r.status === 200
  });

}


