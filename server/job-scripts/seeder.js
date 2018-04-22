const MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/tasks", { native_parser: true })
        .then(client => {
            let db = client.db('tasks');
            var collection = db.collection('tasks');
            let seedData = [
                { startTime: "2018-04-21T10:00:50+02:00", endTime: "2018-04-21T10:20:50+02:00", duration: 1200, description: 'completed thinking'},
                { startTime: "2018-04-21T10:30:50+02:00", endTime: "2018-04-21T11:20:50+02:00", duration: 3000, description: 'completed initial mockups'},
                { startTime: "2018-04-22T12:00:50+02:00", endTime: "2018-04-22T14:00:50+02:00", duration: 7200, description: 'started server-side coding'},
                { startTime: "2018-04-22T15:00:50+02:00", endTime: "2018-04-22T18:00:50+02:00", duration: 10800, description: 'completed server-side coding'},
                { startTime: "2018-04-22T19:00:50+02:00", endTime: "2018-04-22T19:20:50+02:00", duration: 1200, description: 'digging client-side'},
                { startTime: "2018-04-22T19:30:50+02:00", endTime: "2018-04-22T20:00:50+02:00", duration: 1800, description: 'in middle client-side'},
                { startTime: "2018-04-22T20:00:50+02:00", endTime: "2018-04-22T20:20:50+02:00", duration: 1200, description: 'do some testing!!'},
            ];

            collection.insertMany(seedData)
            .then(done => {
                collection.createIndex(
                    { description : "text" }, function(err, result) {
                    client.close();
                    console.log('we are done with seeding...');
                    process.exit(0);
                });
            })
            
        })
