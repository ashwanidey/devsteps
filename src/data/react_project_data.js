export const react_project_data = [

  // The name of the project
  {
  id : "12345",
  name: 'Authorization Form',
  description : `A client just called you to say that they love their new website! There’s only one problem: they don’t like how their contact page displays their personal information for all to see.

They’ve asked you to hide their website’s contact page behind a password form. In this project, you’ll accomplish this by creating a React component to set up a simple authorization layer.`,
  totalsteps : '9',
  checkpoints: [
    {
      stepdescription: `Click Save to see the current state of things.

The contact info in the browser looks fine, but it should be hidden until you enter a password!


Look in **Contact.js**. You can see a \`Contact\` function component. Inside is a function called \`handleSubmit()\`, which will be responsible for authorizing the user into the system.

There’s a lot of logic already here. As we progress, you’ll start learning what \`useState\` and such is. For now, just know that you can check whether a user has entered the right password by checking if \`authorized\` is \`true\`.`,
    },
    {
      stepdescription : `Let's look at the \`<h1></h1>\` tags in the \`return\` statement.

Right now, the \`<h1>\` element displays the text \`Contact\`. If a user hasn't been authorized, then you want the \`<h1>\` element to display \`Enter the Password\` instead.

Using what you know of conditionals in components, make the \`<h1>\` element display \`"Contact"\` only if \`authorized\` is true. If \`authorized\` is false, then the \`<h1>\` element should display \`"Enter the Password"\`.`
    }
  ]
  }

]