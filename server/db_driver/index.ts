const Promise = require('bluebird');
import { MongoConnector } from './mongo-connector';
import { DBDriver } from '../types/DBDriver';
const driverList = {
    'mongodb': require('./mongo-connector').MongoConnector
};

export class DBLoader {
    static load(config) {
        let driver: DBDriver = DBLoader.findDriver(config);
        return driver.connect();
    }

    static findDriver(config) {
        let driver = driverList[config.get('database:client')];
        return driver.get(config.get('database:connection'));
    }
}