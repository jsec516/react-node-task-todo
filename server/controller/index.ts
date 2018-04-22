import { Task } from "./Task";

export function init(services) {
    return {
        task: new Task(services.task)
    };
}