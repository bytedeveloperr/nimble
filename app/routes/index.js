import authRoutes from './auth.js';
import userRoutes from './user.js';

const routes = (express) => {
	const router = express.Router();

	router.use('/auth', authRoutes(express));
	router.use('/user', userRoutes(express));

	return router;
};

export default routes;
