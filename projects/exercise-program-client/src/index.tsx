import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Validation, validateExercise, Exercise } from 'exercise-program-common';

const App: React.FC = () => {
	const [errorMessage, setErrorMessage] = useState<string>();
	const [exercise, setExercise] = useState<Exercise>();

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
				<h2>{exercise !== undefined ? exercise.toString() : 'TODO'}</h2>
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

const appPlaceholder = document.getElementById('app-placeholder');
ReactDOM.render(<App />, appPlaceholder);
