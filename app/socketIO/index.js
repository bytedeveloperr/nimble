import { Server } from 'socket.io';
import handleConnection from './handleConnection.js';
// import server from '../server.js';

const initSocketIO = (server) => {
	const io = new Server(server);
	io.on('connection', (socket) => handleConnection(socket));
};

export default initSocketIO;
