import { Task } from './Task';

export function init(models) {
    return {
        task: new Task(models.task)
    };    
}