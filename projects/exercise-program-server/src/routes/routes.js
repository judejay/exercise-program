"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeRoutes = void 0;
const express = __importStar(require("express"));
const exercise_service_1 = require("../services/exercise_service");
function initializeRoutes(app) {
    console.log('🏗️  Setting up routers...');
    addHealthCheck(app);
    addAPIRoutes(app);
}
exports.initializeRoutes = initializeRoutes;
function addHealthCheck(app) {
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
function addAPIRoutes(app) {
    console.log('🛠️  Creating API router...');
    const apiRouter = express.Router();
    apiRouter.use((req, res, next) => {
        // we'll use this router to return specifically JSON
        res.setHeader('Content-Type', 'application/json');
        next();
    });
    // this route allows clients to GET exercises
    console.log('📨  Adding GET exercises route...');
    apiRouter.get('/exercises/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        //const amount = req.params.amount;
        //const requestedAmount = Number.parseInt(amount);
        // if (Number.isNaN(requestedAmount)) {
        // 	res.status(500).send({ message: "Invalid amount" });
        // 	return;
        // }
        const result = JSON.stringify({
            exercises: yield (0, exercise_service_1.fetchExerciseData)()
        });
        res.status(200).send(result);
    }));
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
