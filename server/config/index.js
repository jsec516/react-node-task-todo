const nconf = require('nconf');
const path = require('path');

module.exports = function init(env) {
    // command line arguments
    nconf.argv();

    // env arguments
    nconf.env();
    nconf.file('custom-env', path.join(process.cwd(), 'server', 'config', env+'.json'));
    return nconf;
}