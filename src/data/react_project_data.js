import mongoose from "mongoose";

export const react_project_data = [
  // The name of the project
  {
    projectid: 101,
    name: "Authorization Form",
    tags: ["React", "JSX"],
    smalldescription: `A client just called you to say that they love their new website! There’s only one problem: they don’t like how their contact page displays their personal information for all to see.

They’ve asked you to hide their website’s contact page behind a password form. In this project, you’ll accomplish this by creating a React component to set up a simple authorization layer.
    `,
    description: `A client just called you to say that they love their new website! There’s only one problem: they don’t like how their contact page displays their personal information for all to see.

They’ve asked you to hide their website’s contact page behind a password form. In this project, you’ll accomplish this by creating a React component to set up a simple authorization layer.`,
    totalsteps: 9,
    remainingsteps: 0,
    checkpoints: [
      {
        stepdescription: `Click Save to see the current state of things.

The contact info in the browser looks fine, but it should be hidden until you enter a password!


Look in **Contact.js**. You can see a \`Contact\` function component. Inside is a function called \`handleSubmit()\`, which will be responsible for authorizing the user into the system.

There’s a lot of logic already here. As we progress, you’ll start learning what \`useState\` and such is. For now, just know that you can check whether a user has entered the right password by checking if \`authorized\` is \`true\`.`,
        checked: false,
      },
      {
        stepdescription: `Let's look at the \`<h1></h1>\` tags in the \`return\` statement.

Right now, the \`<h1>\` element displays the text \`Contact\`. If a user hasn't been authorized, then you want the \`<h1>\` element to display \`Enter the Password\` instead.

Using what you know of conditionals in components, make the \`<h1>\` element display \`"Contact"\` only if \`authorized\` is true. If \`authorized\` is false, then the \`<h1>\` element should display \`"Enter the Password"\`.`,
        checked: false,
      },
      {
        stepdescription: `Let's check to see if that last step is working properly.

For now, the browser should say, \"Enter the Password\". This is because \`authorized\` has the initial value of \`false\`.

Edit line 5 so that it has \`useState(true)\` instead of \`useState(false)\` for now. You should see that the text now says \"Contact\". Don't worry about how \`useState\` works—we'll go over it in a future React lesson.

If it works, then make sure to change it back to \`useState(false)\` before moving on.`,
        checked: false,
      },
      {
        stepdescription: `If the user isn’t authorized, then you want them to see a login form into which they can enter a password. Let’s make that login form!

Before the \`return\` statement but after the \`handleSubmit()\` function, declare a new variable named \`login\`.

Set \`login\` equal to a JSX \`<form></form>\` element. This \`<form></form>\` is going to have multiple children, so wrap it in parentheses!

Give the \`<form></form>\` an attribute of \`action="#"\` to make sure it does not redirect.`,
        checked: false,
      },
      {
        stepdescription: `Good! Now let's give your form some \`<input />\`s for the user to fill out.

In between the \`<form></form>\` tags, write two \`<input />\` tags. Give the first \`<input />\` two attributes:

- \`type="password"\`
- \`placeholder="Password"\`

Give the second \`<input />\` one attribute: \`type="submit"\`.`,
        checked: false,
      },
      {
        stepdescription: `Now, let's hide the contact info.

After your \`login\` variable, declare another variable named \`contactInfo\`. Set it equal to empty parentheses:

\`\`\`
const contactInfo = (
);
\`\`\`

Make sure it is still inside the function component and before the \`return\` statement.

Next, move the \`<ul></ul>\` element in the return statement in between the parentheses we just created for \`contactInfo\`!`,
        checked: false,
      },
      {
        stepdescription: `Great! By saving two JSX expressions as variables, you are ready to toggle between them.

In the component's \`return\` statement, make a new line right below the \`<h1></h1>\` element. On this new line, use a ternary operator. If \`authorized\` is \`true\`, make the ternary return \`contactInfo\`. Otherwise, make the ternary return \`login\`.`,
        checked: false,
      },
      {
        stepdescription: `Within the \`Contact\` function component, you see a function named \`handleSubmit()\`.

This function will check whether a submitted password is equal to 'swordfish'. If it is, then \`authorized\` will become \`true\`.

You need \`handleSubmit\` to get called whenever a user clicks the submit button.

Give the \`<form></form>\` element an \`onSubmit\` attribute. Set the attribute's value equal to the \`handleSubmit\` function.`,
        checked: false,
      },
      {
        stepdescription: `Try entering an incorrect password and hitting "Submit". Nothing should happen.

Now try entering "swordfish". The website should reveal the contact info!`,
        checked: false,
      },
    ],
    files: {
      "Contact.js": {
        code: `import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

  return (
      <div id="authorization">
        <h1>Contact</h1>
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
      </div>
  );
}

export default Contact;`,
        hidden: false,
        active: true,
      },
      "styles.css": {
        code: `html, body {
	margin: 0;
	height: 100%;
}

body {
	background-color: #ffffff;
	font-family: Helvetica, Arial, sans-serif;
  text-align: center;
}

#app {
	position: relative;
	height: 100%;
	width: 100%;
	padding-top: 10px;
}

#app div div {
	height: 100%;
}

#app div div div {
	position: relative;
	height: auto;
}

h1, h2 {
	margin-left: 5%;
	margin-right: 5%;
}

ul {
	list-style-type: none;
	padding: 0;
}

label {
	display: block;
	margin: 20px;
	font-size: 30px;
	font-weight: bold;
}

nav a {
	margin:12px;
	text-transform: uppercase;
	font-size: 10px;
}

button {
	-webkit-transition-duration: 0.1s; /* Safari */
	transition-duration: 0.1s;
	background-color: #F4595B;
	border-radius: 8px;
	border-bottom: 4px solid #C24648;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	font-family: 'Oxygen', sans-serif;
	letter-spacing: 2px;
}

button:hover {
  background-color: #FF7375;
  border: none;
  border-radius: 8px;
  border-bottom: 4px solid #C24648;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Oxygen', sans-serif;
  letter-spacing: 2px;
}

button:active {
  background-color: #C24648;
  border: none;
  border-radius: 8px;
  border-bottom: 4px solid #C24648;
  color: #CCC;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Oxygen', sans-serif;
  letter-spacing: 2px;
}

#authorization {
	max-width: 600px;
	width: 70%;
	margin: 100px auto;
	border: 1px solid black;
}

input {
	display: block;
	margin: 10px auto;
	padding: 5px;
	font-size: 16px;
	border-radius: 5px;
}

button, input[type="submit"] {
	margin: 20px;
	padding: 7px 35px;
	border-radius: 10px;
	font-size: 16px;
	cursor: pointer;
	display: inline-block;
}`,
        hidden: true,
      },
      "App.js": {
        code: `import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './Contact'

function App() {
  return <Contact />;
}

export default App`,
        hidden: true,
      },
    },
  },
  {
    projectid: 102,
    name: "Styling Rock, Paper, Scissors",
    tags: ["React", "JSX", "CSS"],
    smalldescription: `In this project, you will get the chance to practice styling React applications using different techniques.

You will be styling a game of Rock, Paper, Scissors. However, rather than sticking to one technique, you will be asked to modify its appearance using inline styling syntax, object variable syntax, and, finally, CSS modules!

Throughout the project, you’ll be able to explore the advantages and disadvantages of each approach and practice React naming conventions for style properties.`,
    description: `In this project, you will get the chance to practice styling React applications using different techniques.

You will be styling a game of Rock, Paper, Scissors. However, rather than sticking to one technique, you will be asked to modify its appearance using inline styling syntax, object variable syntax, and, finally, CSS modules!

Throughout the project, you’ll be able to explore the advantages and disadvantages of each approach and practice React naming conventions for style properties.

By the end of this practice project, you will have improved your skills in styling React applications using various techniques and gained a deeper understanding of the different approaches. You will be able to apply your learnings to future React projects and improve your coding skills!

Let’s roll up our sleeves and start!`,
    totalsteps: 15,
    remainingsteps: 0,
    checkpoints: [
      {
        stepdescription: `Take a look at **Game.js**. The game is already functional, but it needs some styling.

Start by practicing your understanding of inline styling.

Find the \`<h1>\` element responsible for the game's title, "Rock Paper Scissors".

Apply an inline style to change the font size property to \`48\`, and set the margin top property to \`0\`.`,
checked : false,
      },
      {
        stepdescription : `Next, let's define a few object variables to use for styling.

Above the \`Game\` component, create an object variable named \`choiceStyles\`. The object should contain the following properties:

- Display with the value of \`flex\`.
- Align items with the value of \`center\`
- Margin bottom with a value of \`40\` pixels.`,
checked : false,
      },
      {
        stepdescription : `Under the \`choiceStyles\`, define another object variable named \`emojiStyles\` with the following properties:

- Font size with the value \`64px\`.
- Margin right with the value of \`20px\`.`,
checked : false,
      }
    ],

    files : {
      "Game.js": {
        code: `import React, { useState } from "react";

const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];


function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState(null);
  const [result, setResult] = useState(null);

  function handlePlayerChoice(choice) {
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  }

  function resetGame() {
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
  }

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        {CHOICES.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && codeyChoice && (
        <div>
          <div>
            <span>{playerChoice.emoji}</span>
            <p>You chose {playerChoice.name}</p>
          </div>
          <div>
            <span>{codeyChoice.emoji}</span>
            <p>The computer chose {codeyChoice.name}</p>
          </div>
          <h2>{result}</h2>
          <button onClick={resetGame}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default Game;
`,
        hidden: false,
        active: true,
      },
      "Game.module.css" : {
        code : `.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  background-color: #000000;
  color: #ffffff;
  padding: 40px;
}

.choices {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}

.button {
  font-size: 48px;
  background-color: #333333;
  color: #ffffff;
  border: 4px solid #ffffff;
  border-radius: 8px;
  padding: 20px 40px;
  margin: 0 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.results {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}
`,
        hidden: false,
      active : true
      },
      "App.js" : {
        code : `import React from 'react';
import Game from './Game.js'

function App() {
    return (
      <Game />
    )
  }
  
  export default App`,
  hidden : false,
  active : false,
      }

    }
  },
];
