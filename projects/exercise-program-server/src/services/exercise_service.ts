import axios from 'axios';
//import { routineInput } from '../types'; // Import the 'routineInput' type from the appropriate module

export async function fetchExerciseData() {
	try {
		const response = await axios.get('https://api.api-ninjas.com/v1/exercises', {
			headers: {
				'Content-Type': 'application/json',
				'X-Api-Key': 'USEKEY'
			}
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

export function weaklyValidateRoutine(body: any) {
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

export async function handleRoutine(routine: any) {
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
}
