
var knex = require('knex');

var db = knex({
	client: 'sqlite3',
	connection: {
		filename: './school.db'
	}
});

db.schema.dropTableIfExists('Teacher').then(() => {
	console.log('Dropped Teacher table');
});

// Initialize your table
db.schema.createTable('Teacher', function (table) {
	table.string('email').primary();
	table.string('name');
	table.string('surname');
	table.string('password');
}).then(() => {
	console.log('Creating Teacher table');
})