tech stack
==========
react.js
node.js
typescript
mongodb

development machine info
=======================
ubuntu 16.04
node - v6.14.1
npm - 3.10.10
mongodb - 3.4.6

instructions
============
prerequisite
- please make sure you have mongodb running on port `27017`
- port `8080` and `3000` is free
- please make sure NODE_ENV is `development` as we have only one configuration file for server

NOTE: filtering feature in client side requires exact word. for an example in seed data that I provided in script, if you provide `server-side` it will retrieve 2 records contains that term.

how to run server
=================
- go to the directory `/server`
- run `npm install` (if it does not work on your computer then you may try `sudo npm install`)
- run `node job-scripts/seeder.js`, it will seed the database and also create index for `description` filtering
- run `npm start`
- now the api server should run under `localhost` port `8080`

how to run client
=================
if server is run without any error (if you do not see any error on server console) then you can do the following things to run client:
- go to `/client` folder
- run `npm install`
- run `npm start`
- now `client` should be available under `http://localhost:3000`
  - most of the case it should be already popup in your browser

troubleshoot
============
- if your port is already engaged for `8080`
  - please change the port in `/server/config/development.json`
  - also change the `REACT_APP_API_URL` variable `/client/.env`
- please make sure `npm install` worked properly
- please check mongo is running under port `27017`

overview
========
I have just spent my weekend on that project. When I saw the task first, I thought it would be no-brainer. I broke down the stories in to my trello board and pain started when started to think about tech stack. 

selecting tech stack was a pain
==============================
I was in confusion which way I should go in terms of server side php7 or node.js. Here is my points that I thought on that time:
 - As, you wanted to see OOP skills it was easy way to go on php7. But as I just started on my weekend, I did not have enough time to do some refreshing on my php skills.
 - node.js or javascript is a great fit for me as I use it on my day to day task. But showing up OOP skills in node.js or javascript still not so day to day practice.

solution
========
So, I took my recent skill node.js and baked with Typescript so that I can express the OOP thinking and surrounding principles on my way. I was using OOP skills and other principles like `SOLID` or `KISS` on my day to day work but in javascript way. But in that project, I have tried to use it uniform way which should most of the case similar to any language. So, `typescript`, `node.js` were the solution for me on server side.

Development time
===============
planning = 2 hours
server side coding = 5 hours
client side coding = 12 hours
documenting stuff = 1 hour

Overall Observation about my coding
===================================
I have tried to keep it simple. Avoid any kind of optional thing.

server side
===========
My plan was not use any high level framework like sails.js or restify as it will not give you the chance to asses my coding skill. I created simple framework on that project which points to highly testable code as it is loosely coupled. You can test most of the part like controller, model, services and also other base files even without intiating database. I have put a sample test in the test folder to give you an idea. I have tried to use object oriented concepts as much as possible.

client side
===========
To be honest, I never required to build an end to end client side application. So, it took some time for me to do that part. But I have tried general principle of programming and also my knowledge about those framework like angualrjs, angular2, vue.js and react. It may be containing all the best practices that industry follows, but I have tried to keep cowboy-coding reasonable.

what if I had more time
=======================
- do that validation on client side properly, right now I am just show alert
- make client side more satisfactory in terms of coding perspective. In some cases, I have used variables which can be achived using state. 
- Writing some test cases for client and server side would be a great step to make the app solid
- Build a docker file so that it can be runnable easily
- check the edge cases of application like whether date conversions are reliably working or not.
- I have used client side pagination which is not a great choice. loading all data in client side will make the app slow based on data volume. So, in real case it should be done on server side.

which parts of my application I am satisfied
============================================
I think withing short amount of time I have done a good job. But I liked the server side coding part as I was able to implement most of the coding principles that I generally follow in terms of maintainability and  readablity. 

improvement
===========
- I would like to improve client side application code
- I would like improve `dependency injection` in server side using.
- some code in server side can also be absracted using parent class which left in class level (as requirement has only one object - Task)
