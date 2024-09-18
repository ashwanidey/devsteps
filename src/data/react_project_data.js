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
    totalsteps: "9",
    checkpoints: [
      {
        stepdescription: `Click Save to see the current state of things.

The contact info in the browser looks fine, but it should be hidden until you enter a password!


Look in **Contact.js**. You can see a \`Contact\` function component. Inside is a function called \`handleSubmit()\`, which will be responsible for authorizing the user into the system.

There’s a lot of logic already here. As we progress, you’ll start learning what \`useState\` and such is. For now, just know that you can check whether a user has entered the right password by checking if \`authorized\` is \`true\`.`,
      },
      {
        stepdescription: `Let's look at the \`<h1></h1>\` tags in the \`return\` statement.

Right now, the \`<h1>\` element displays the text \`Contact\`. If a user hasn't been authorized, then you want the \`<h1>\` element to display \`Enter the Password\` instead.

Using what you know of conditionals in components, make the \`<h1>\` element display \`"Contact"\` only if \`authorized\` is true. If \`authorized\` is false, then the \`<h1>\` element should display \`"Enter the Password"\`.`,
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
];
