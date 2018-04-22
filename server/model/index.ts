import { Task } from './Task';
import { DBDriver } from '../types/DBDriver';

export function init(db: DBDriver) {
    return {
        task: new Task(db)
    }
}