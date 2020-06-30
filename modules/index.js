class Module {
    constructor(app) {
        this.app = app;
    }

    init() {
        const productcontroller = require('./product/product.controller');
        new productcontroller(this.app);
    }
}
module.exports = Module;