import { createRoot } from 'react-dom/client';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Validation, validateExercise, Exercise } from 'exercise-program-common';

const App: React.FC = () => {
	const [errorMessage, setErrorMessage] = useState<string>();
	const [exercises, setExercises] = useState<Exercise[]>();

	useEffect(() => {
		fetch(
			'http://localhost:3000/api/exercises'
		)
			.then(async (response) => {
				const payload = await response.json();
				if (response.ok) {
					console.log("payload", payload.exercises.exercises)
					setExercises(payload.exercises.exercises);
					console.log("exercises", exercises);

				} else {
					setErrorMessage(payload.message);
				}
			})
			.catch((_networkError) => {
				setErrorMessage('Network error');
			});


	}, [])



	return (
		<div>
			<div>
				<h1>
					Exercises
				</h1>


				{errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
			</div>

			<ul>
				{exercises && exercises?.map((exc, index) => {
					return <li key={index}>{exc.name}</li>

				})}




			</ul>
		</div >
	);
};

const container = document.getElementById('app');
const root = createRoot(container!); // Add the "!" operator to assert that the container element exists
root.render(<App />);
