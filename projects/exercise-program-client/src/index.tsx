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
					console.log(payload);
					setExercises(payload);
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
				<p>
					<span>Exercise: </span>

				</p>
				<button onClick={() => { }} type="button">
					Get exercise
				</button>

				{errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
			</div>

			<div>
				<h2>{exercises !== undefined ? exercises.toString() : 'TODO'}</h2>
				<h3
					style={{
						display: 'flex',
						alignItems: 'center'
					}}
				>


				</h3>

			</div>
		</div>
	);
};

const container = document.getElementById('app');
const root = createRoot(container!); // Add the "!" operator to assert that the container element exists
root.render(<App />);
