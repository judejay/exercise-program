import * as express from 'express';
import { Express } from 'express';
import { fetchExerciseData, weaklyValidateRoutine } from '../services/exercise_service';
import * as EXERCISES from '../data/exercises.json';
export function initializeRoutes(app: Express) {
	console.log('🏗️  Setting up routers...');

	addHealthCheck(app);

	addAPIRoutes(app);
}

function addHealthCheck(app: Express) {
	console.log('🛠️  Creating base router...');

	const baseRouter = express.Router();

	baseRouter.use((req, res, next) => {
		res.header('Access-Control-Allow-Methods', 'GET');
		console.log(`📨 ${req.url}`);
		next();
	});
	console.log('🏠❤️‍🩹  Adding health check route...');
	baseRouter.get('/health', (req, res) => {
		res.status(200).send('👍 Okay! The server is responding! 🙌');
	});

	console.log('🛠️  Applying base router to Express server...');
	app.use('/', baseRouter);
}

// this function adds all the routes we can access by going to /api/[someRoute]
function addAPIRoutes(app: Express) {
	console.log('🛠️  Creating API router...');

	const apiRouter = express.Router();
	apiRouter.use((req, res, next) => {
		// we'll use this router to return specifically JSON
		res.setHeader('Content-Type', 'application/json');
		next();
	});
	// this route allows clients to GET exercises
	console.log('📨  Adding GET exercises route...');
	apiRouter.get('/exercises/', async (req, res) => {
		//const amount = req.params.amount;

		//const requestedAmount = Number.parseInt(amount);

		// if (Number.isNaN(requestedAmount)) {
		// 	res.status(500).send({ message: "Invalid amount" });
		// 	return;
		// }

		// 	const result = JSON.stringify({
		// 		exercises: await fetchExerciseData()
		// 	});
		// 	res.status(200).send(result);
		// });

		const result = JSON.stringify({
			exercises: EXERCISES
		});
		res.status(200).send(result);
	});
	// this route allows clients to POST routines
	// console.log("📨  Adding POST routine route...");
	// apiRouter.post("/confess/", async (req, res) => {
	// 	const { body } = req;
	// 	console.log(`📨  routine received:`, body);

	// 	if (weaklyValidateRoutine(body) === true) {
	// 		const result = await handleRoutine(body);
	// 		res.status(200).send(JSON.stringify(result));
	// 	} else {
	// 		res.status(500).send({
	// 			success: false,
	// 			message: "Invalid routine",
	// 		});
	// 	}
	// });

	console.log('🛠️  Applying API router to Express server...');
	app.use('/api', apiRouter);
}
