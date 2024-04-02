export class Pagination {
    constructor(page = 0, size = 30, sorts = ["id,desc"]) {
        this.page = page;
        this.size = size;
        this.sorts = sorts;
      }
}