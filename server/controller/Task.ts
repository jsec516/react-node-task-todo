import { TaskService } from "../types/TaskService";

export class Task {
    constructor(private taskService: TaskService) {
    }

    list(req, res) {
        return this.taskService.find(req.query || {})
        .then(tasks => {
            return res.json(tasks);
        });
    }

    create(req, res) {
        return this.taskService.save({
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            description: req.body.description
        }).then(saved => {
            return res.json({success: true, message: 'saved successfully', data: saved});
        });
    }
}