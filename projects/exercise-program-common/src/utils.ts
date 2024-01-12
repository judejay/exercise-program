import { Validation } from "./types";

export const validateExercise = (exerciseName: string): Validation => {
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
