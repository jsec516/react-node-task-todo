import { TaskModel } from "../types/TaskModel";
import { TaskObject } from "../types/TaskObject";
import { TaskService } from "../types/TaskService";

export class Task implements TaskService{
    constructor(private taskModel: TaskModel) {

    }

    find(criteria: any) {
        return this.taskModel.find(criteria);
    }

    save(newTask: TaskObject) {
        return this.taskModel.save(newTask);
    }
}