
var knex = require('knex');

var db = knex({
	client: 'sqlite3',
	connection: {
		filename: './school.db'
	}
});

db.schema.dropTableIfExists('use').then(() => {
	console.log('Dropped use table');
});

db.schema.dropTableIfExists('supervise').then(() => {
	console.log('Dropped supervise table');
});

db.schema.dropTableIfExists('Activity').then(() => {
	console.log('Dropped Activity table');
});

db.schema.dropTableIfExists('assign').then(() => {
	console.log('Dropped assign table');
});

db.schema.dropTableIfExists('Card').then(() => {
	console.log('Dropped Card table');
});

db.schema.dropTableIfExists('teach').then(() => {
	console.log('Dropped teach table');
});

db.schema.dropTableIfExists('Student').then(() => {
	console.log('Dropped Student table');
});

db.schema.dropTableIfExists('Pictogram').then(() => {
	console.log('Dropped Pictogram table');
});

db.schema.dropTableIfExists('GenericActivity').then(() => {
	console.log('Dropped GenericActivity table');
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

db.schema.createTable('GenericActivity', function (table) {
	table.increments('id').primary();
	table.string('name');
	table.string('type');
}).then(() => {
	console.log('Creating GenericActivity table');
})

db.schema.createTable('Pictogram', function (table) {
	table.increments('id').primary();
	table.string('name');
	table.binary('picture');
	table.binary('sound');
}).then(() => {
	console.log('Creating Pictogram table');
})

db.schema.createTable('Student', function (table) {
	table.increments('id').primary();
	table.string('name');
	table.string('surname');
}).then(() => {
	console.log('Creating Student table');
})

db.schema.createTable('teach', function (table) {
	table.integer('student').references('id').inTable('Student');
	table.string('teacher').references('email').inTable('Teacher');
	table.unique(['student', 'teacher']).primary();
}).then(() => {
	console.log('Creating teach table');
})

db.schema.createTable('Card', function (table) {
	table.integer('pictogram').references('id').inTable('Pictogram');
	table.string('RFID');
	table.unique(['pictogram', 'RFID']).primary();
}).then(() => {
	console.log('Creating Card table');
})

db.schema.createTable('assign', function (table) {
	table.integer('student').references('id').inTable('Student');
	table.string('RFID').references('RFID').inTable('Card');
	table.string('pictogram').references('pictogram').inTable('Card');
	table.unique(['student', 'RFID', 'pictogram']).primary();
}).then(() => {
	console.log('Creating assign table');
})

db.schema.createTable('Activity', function (table) {
	table.increments('id').primary();
	table.integer('genericActivity').references('id').inTable('GenericActivity');
	table.integer('student').references('id').inTable('Student');
	table.integer('rigthAnswer');
	table.integer('wrongAnswer');
	table.dateTime('startTime').nullable();
	table.dateTime('endTime').nullable();
}).then(() => {
	console.log('Creating Activity table');
})

db.schema.createTable('supervise', function (table) {
	table.integer('activity').references('id').inTable('Activity');
	table.string('teacher').references('email').inTable('Teacher');
	table.unique(['activity', 'teacher']).primary();
}).then(() => {
	console.log('Creating supervise table');
})

db.schema.createTable('use', function (table) {
	table.integer('activity').references('id').inTable('Activity');
	table.string('RFID').references('RFID').inTable('Card');
	table.string('pictogram').references('pictogram').inTable('Card');
	table.unique(['activity', 'RFID', 'pictogram']).primary();
}).then(() => {
	console.log('Creating use table');
})