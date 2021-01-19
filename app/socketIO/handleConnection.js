const handleConnection = (socket) => {
	socket.on('disconnect', () => {
		console.log('disconnected...');
	});
};

export default handleConnection;
