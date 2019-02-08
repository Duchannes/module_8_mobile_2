const path = require(`path`);
exports.config = {
  runner: `local`,
  specs: [
    `./test/specs/*.js`
  ],
  exclude: [
    `./test/specs/spec.js`
  ],
  maxInstances: 10,
  capabilities: [{
    platformName: `Android`,
    deviceName: `myDevice`,
    // app: path.resolve(`./app/api-demos.apk`)
    app: path.resolve(`./app/calc.apk`)
  }],
  port: 4723,
  sync: true,
  screenshotPath: `./screenshots/`,
  logLevel: `debug`,
  deprecationWarnings: true,
  bail: 0,
  baseUrl: `http://localhost`,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: `mocha`,
  reporters: [`dot`, `spec`],
  mochaOpts: {
    ui: `bdd`,
    timeout: 300000
  }
};
