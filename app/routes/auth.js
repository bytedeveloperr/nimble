const routes = (express) => {
	const router = express.Router();

	router.get('/', (req, res) => {
		res.json('auth');
	});

	return router;
};

export default routes;
