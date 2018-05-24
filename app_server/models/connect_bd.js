
var knex = require('knex');

var db = knex({
	client: 'sqlite3',
	connection: {
		filename: './school.db'
	}
});
console.log('Connected sqlite3')
module.exports = db;
