import server from './app/server.js';
import initSocketIO from './app/socketIO/index.js';
import { common } from './config/index.js';

try {
	await server.listen(common.port);
	initSocketIO(server);
	console.log(`listening on ${common.port}`);
} catch (e) {
	throw e;
}
