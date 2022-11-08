const Employees = require('./employee.js');


async function init() {
    const softwareEngineers = new Employees("Software Engineers")
    await softwareEngineers.createManager()
}
init();
