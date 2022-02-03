# Lab 2

- **Reflection question 1:** Is there a difference between class based components and function components, for example function App(){...} that the react template builder created for you?

  - Yes, functional components are stateless. Using hooks they can become stateful, in which case they a re very similar to class components (except that they don't require the render() function).

- **Reflection question 2:** The render function must be a proper function of this.props and this.state. What happens if the output of the render function is depending on other data?

  - It re-renders whenever the other data changes. You only want to re-render when something about the component changes (usually state).

- **Reflection question 3:** Can you cache foundations so it is only computed when props.inventory changes?

  - Make it a property?

- **Reflection question 4:** What triggers react to call the render function and update the DOM?

  - State changes (setState) or property changes.

- **Reflection question 5:**: When the user changes the HTML form state, does this change the state of the component?

  - Yes, click/change-handlers will change the component state based on the form state.

- **Reflection question 6:**: What is the value of this in the event handling call-back functions?

  - The Component object (due to binding).

- **Reflection question 7:**: How is the prototype chain affected when copying an object with copy = {...sourceObject}?

  - The prototype chain is not copied, so inherited properties will be gone.
