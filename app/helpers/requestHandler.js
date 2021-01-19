const requestHandler = (controller) => {
	return async (req, res, next) => {
		try {
			let response = await controller(req);
			if (response.headers) {
				res.set(response.headers);
			}
			return response.status(response.status).json(response.data);
		} catch (e) {
			next(e);
		}
	};
};

export default requestHandler;
