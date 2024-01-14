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
const client_1 = require("react-dom/client");
const react_1 = __importStar(require("react"));
const App = () => {
    const [errorMessage, setErrorMessage] = (0, react_1.useState)();
    const [exercises, setExercises] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        fetch('http://localhost:3000/api/exercises')
            .then((response) => __awaiter(void 0, void 0, void 0, function* () {
            const payload = yield response.json();
            if (response.ok) {
                console.log(payload);
                setExercises(payload);
            }
            else {
                setErrorMessage(payload.message);
            }
        }))
            .catch((_networkError) => {
            setErrorMessage('Network error');
        });
    }, []);
    return (<div>
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
				<h3 style={{
            display: 'flex',
            alignItems: 'center'
        }}>


				</h3>

			</div>
		</div>);
};
const container = document.getElementById('app');
const root = (0, client_1.createRoot)(container); // Add the "!" operator to assert that the container element exists
root.render(<App />);
