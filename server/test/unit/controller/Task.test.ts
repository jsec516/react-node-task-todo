import { Task } from '../../../controller/Task';
import { assert } from 'chai';
declare var describe: any;
declare var before: any;
declare var it: any;

var taskController = null;

class FakeTaskService {
    save(params) {
        return Promise.resolve(true);
    }

    find(criteria) {
        return Promise.resolve([]);
    }
}

describe('TaskController', function() {
    before(() => {
        taskController = new Task(new FakeTaskService());
    })
    describe('list', function() {
        it('should get all task', (done) => {
            taskController.list({}, {json: (result) => {
                assert.ok(result.success, 'result is successful');
                done();
            }});
        })
    });
});
const TaskController = require('../../../controller/Task').TaskController;
