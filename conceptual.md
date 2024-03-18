### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a frontend js library. You would use it to streamline your code and make it more efficient.

- What is Babel?
Babel is a js transcompiler that converts modern js code into older versions of js code.

- What is JSX?
It is a syntax extension that allows a user to make html in js.

- How is a Component created in React?
A component is created by using the `React.Component` class.

- What are some difference between state and props?
A state is managed inside of a component and a prop is passed from a parent component to a child component.

- What does "downward data flow" refer to in React?
How data is passed from parent components to their child components.

- What is a controlled component?
A component a user lets react control.

- What is an uncontrolled component?
A component that a user controls.

- What is the purpose of the `key` prop when rendering a list of components?
To help reaf keep track of the components. This helps with updates down the line.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
An index would be unique to the array and not the component.

- Describe useEffect.  What use cases is it used for in React components?
useEffect is a hook that allows you to perform side effects in a functional component.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
It returns a ref object with a current property. It does not cause a rerender of a component.

- When would you use a ref? When wouldn't you use one?
When you need info from a component but dont want to rerender it.

- What is a custom hook in React? When would you want to write one?
It allows users to create their own hooks. You would want to write one when you need to reuse something across multiple components.