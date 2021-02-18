function add(a, b) {
    return a + b;
}

exports.add = add;// const obj = require('./4_moduleA.js'); obj.add(3,4);

module.exports = add;//const add = require('./4_moduleA.js'); add(3,4);

