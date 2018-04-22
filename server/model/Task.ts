import { DBDriver } from "../types/DBDriver";
import { TaskModel } from "../types/TaskModel";

export class Task implements TaskModel{
    private collection: string = 'tasks';

    constructor(private db: DBDriver) {
    }

    save(docs) {
        return this.db.create(this.collection, docs);
    }

    find(criteria: any) {
        return this.db.find(this.collection, criteria);
    }
}