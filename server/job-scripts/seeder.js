const MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/tasks", { native_parser: true })
        .then(client => {
            let db = client.db('tasks');
            var collection = db.collection('tasks');
            collection.createIndex(
                { description : "text" }, function(err, result) {
                console.log(result);
            });
        })
