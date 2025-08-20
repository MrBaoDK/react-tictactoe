## TicTacToe — Simple Study Game

A minimal, educational Tic-Tac-Toe built with ReactJS and deployed with gh-page cli.

This project is designed for learning component structure, game logic, and
simple AI move generation.

### What you get

- Clean component breakdown (Board, Square, Game)
- Small game engine (win detection, draw handling)
- Optional bot move logic to play against the computer
- Basic styling and responsive layout
- Tiny codebase ideal for study and experimentation

### Project structure

```css
- public/ — static assets and index.html
- src/
   - App.js — root app wrapper

   - component/
      - Board.js — renders squares and board layout
      - Game.js — main game component and state management
      - Square.js — single square component
   - function/
      - bot_move.js — (simple) bot move selection
      - get_winner.js — win/draw detection
   - style/
      - tictactoe.css — styles for the game

   - index.css — global styles
   - index.js — app entry
```

### Getting started (run locally)

1. Install dependencies
`npm install`
2. Start dev server
`npm start`
3. Open the site
Visit http://localhost:5173 (or the URL shown in your terminal)

### Available scripts

- `npm start` — Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

- `npm run build` — Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

- `npm run test` — Launches the test runner in the interactive watch mode.
- `npm run eject` — **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
- `npm run deploy` — deploy with gh-page cli.


### How the game works

- Players alternate placing X and O on a 3x3 grid.
- After each turn the game checks for a winner (three in a row) or a draw
(full board, no winner).
- A simple bot chooses moves using the logic in bot_move.js (feel free to
replace with a minimax implementation for stronger play).

### Learnings and extension ideas

- Replace the bot with Minimax for optimal play.
- Convert components to TypeScript for type safety.
- Add move history and time-travel (undo/redo).
- Add animations and improved styling (Tailwind or CSS modules).
- Add tests for game logic (win/draw detection and bot behavior).

### Contributing This is a small study project — contributions are welcome:

- Improve game AI
- Add tests
- Polish UX / accessibility

### License MIT — use and modify freely.

### Notes

- Files to inspect first: `src/component/Game.js` and `src/function/get_winner.js`.