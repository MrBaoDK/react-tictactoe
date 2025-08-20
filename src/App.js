import { BrowserRouter as Router } from "react-router-dom";

import TicTacToeGame from "./component/Game";

export default function App() {
	return (<Router basename="/react-tictactoe">
			<TicTacToeGame />
		</Router>);
}
