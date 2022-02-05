# Lab 3

- **Reflection question 1:** How do you replace the application icon, favicon.ico?

  - In public/index.html, replace "<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />" with whatever icon you would prefer.

  - **Reflection question 2:** If you use nav-pills instead of nav-tabs the selected page is no longer highlighted in the menu, why?

  - They are both highlighted. Pills changes font color when in focus, tabs changes font color and adds border to the link.

- **Reflection question 3:** What is the difference between <Link to="compose-salad"> and
  <Link to="/compose-salad">. Try it, look in the browser url field.

  - No difference?

- **Reflection question 4:** What triggers react to call the render function and update the DOM?

  - State changes (setState) or property changes.

- **Reflection question 5:**: When the user changes the HTML form state, does this change the state of the component?

  - Yes, callback functions will change the component state based on the form state.

- **Reflection question 6:**: What is the value of this in the event handling call-back functions?

  - The Component object (due to binding).

- **Reflection question 7:**: How is the prototype chain affected when copying an object with copy = {...sourceObject}?

  - The prototype chain is not copied, so inherited properties will be gone.
