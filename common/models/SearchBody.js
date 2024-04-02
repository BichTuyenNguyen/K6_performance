import { Pagination } from "./Pagination.js";

export class SearchBody {
	type;
	conditions;
	ignoreAutoFill;
	pagination;
	functions;
	groupBys;

	constructor(type, conditions) {
		this.type =  type;
		this.conditions = conditions;
		this.pagination = new Pagination();
	}
}