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


About tech stack
=================
I took node.js and baked with Typescript so that I can express the OOP thinking and surrounding principles on my way. I was using OOP skills and other principles like `SOLID` or `KISS` on my day to day work but in javascript way. But in that project, I have tried to use it uniform way which should most of the case similar to any language. So, `typescript`, `node.js` were the solution for me on server side.

Overall Observation about my coding
===================================
I have tried to keep it simple. Avoid any kind of optional thing.

improvement
===========
- Improve client side application code
- Improve `dependency injection` in server side using dependency injector.
  - or for toy, build a custom one
- some code in server side can also be absracted using parent class which left in class level
