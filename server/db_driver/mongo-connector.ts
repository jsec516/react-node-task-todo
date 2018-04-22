import { DBDriver } from "../types/DBDriver";
const MongoClient = require('mongodb').MongoClient;

export class MongoConnector implements DBDriver {
    private db: any;
    constructor(private url: string) {
    }

    connect() {
        return MongoClient.connect(this.url, { native_parser: true })
        .then(client => {
            this.db = client.db('tasks');
            return this;
        });
    }


    find(collection: string, criteria: any) {
        let params: any = {};
        if(criteria && criteria.term) {
            params= { $text: { $search: "\""+criteria.term+"\"" } }
        }
        console.log(params);
        const documents = this.db.collection(collection);
        return documents.find(params).toArray();
    }

    create(collection: string, params: any) {
        const documents = this.db.collection(collection);
        return documents.insert(params);
    }

    static get(url) {
        return new MongoConnector(url);
    }
}