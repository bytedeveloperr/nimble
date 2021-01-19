const database = {
	mongodb: {
		uri: process.env.MONGODB_URI || 'mongodb://localhost:27017',
		dbName: process.env.MONGODB_DB_NAME || 'test',
	},
	redis: {},
};

export default database;
