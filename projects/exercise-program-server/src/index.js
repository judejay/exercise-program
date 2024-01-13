"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import * as cors from 'cors';
const dotenv_1 = __importDefault(require("dotenv"));
const helpers_1 = require("./helpers/helpers");
const routes_1 = require("./routes/routes");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// const corsOptions = {
// 	origin: '*',
// 	credentials: false, //access-control-allow-credentials:true
// 	optionSuccessStatus: 200
// };
try {
    (0, helpers_1.printNewLine)();
    console.log('💫 Initializing Server...');
    const app = (0, express_1.default)();
    console.log('👉 Enabling JSON middleware...');
    app.use(express_1.default.json());
    console.log('👉 Enabling URL-Encoded middleware...');
    app.use(express_1.default.urlencoded({ extended: true }));
    console.log('👉 Enabling CORS...');
    app.use((0, cors_1.default)());
    (0, routes_1.initializeRoutes)(app);
    const server = app
        .listen(port, () => {
        console.log(`⭐ Server is now listening on port: ⚓ ${port} ⭐`);
        (0, helpers_1.printNewLine)();
        console.log(`⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐`);
        console.log(`⭐    Health check at "http://localhost:${port}/health"            ⭐`);
        console.log(`⭐    Or try "http://localhost:${port}/api/exercises"        ⭐`);
        console.log(`⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐`);
    })
        .on('error', (error) => {
        console.error('🚨 Express Error Handler 🚨 ');
        console.error(error);
    });
    process.on('SIGINT', () => handleShutdown(server));
    process.on('SIGTERM', () => handleShutdown(server));
    process.on('SIGHUP', () => handleShutdown(server));
}
catch (e) {
    console.error('🚨 Top level Error caught 🚨 ');
    console.error(e.message);
}
function handleShutdown(server) {
    console.log('🚪 Closing Server...');
    server.close(() => {
        console.log('🏥 Express server closed ✅');
        process.exit(0);
    });
}
