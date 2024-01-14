"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRoutine = exports.weaklyValidateRoutine = exports.fetchExerciseData = void 0;
const axios_1 = __importDefault(require("axios"));
//import { routineInput } from '../types'; // Import the 'routineInput' type from the appropriate module
function fetchExerciseData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('https://api.api-ninjas.com/v1/exercises', {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': ''
                }
            });
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.fetchExerciseData = fetchExerciseData;
function weaklyValidateRoutine(body) {
    //   console.log(`🔍 Validating routine...`, body.routine);
    //   if (!body) return false;
    //   if (
    //     !body.routine ||
    //     !(EXERCISE.includes(body.routine) || body.routine === EXAMPLE)
    //   ) {
    return false;
    //   }
    //   return body.subject !== undefined && body.details !== undefined;
}
exports.weaklyValidateRoutine = weaklyValidateRoutine;
function handleRoutine(routine) {
    return __awaiter(this, void 0, void 0, function* () {
        if (routine.reason === 'just-talk') {
            console.log(`🗣️ You just want to talk about ${routine.subject}. Thanks! 💜`);
            return {
                success: true,
                justTalked: true,
                message: 'Thanks for talking to us.'
            };
        }
        console.log(`💡 routine received.`);
        return {
            success: true,
            justTalked: false,
            message: 'routine received.'
        };
    });
}
exports.handleRoutine = handleRoutine;
