const routes = (express) => {
	const router = express.Router();

	router.get('/', (req, res) => {
		res.json('user');
	});

	return router;
};

export default routes;
