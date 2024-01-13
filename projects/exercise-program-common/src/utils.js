"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateExercise = void 0;
const validateExercise = (exerciseName) => {
    if (exerciseName.length < 3) {
        return {
            valid: false,
            message: "Exercise name must be at least 3 characters long",
        };
    }
    return {
        valid: true,
    };
};
exports.validateExercise = validateExercise;
