import { connect } from './assets/js/database.js';

connect(function (cb) {
    if (cb) {
        console.log('mysql conncted');
    } else {
        console.log('mysql connect failed.');
        process.exit(1);
    }
});