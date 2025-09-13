# Note 1: package.json scripts

- In package.json under scripts we can do "start": "parcel index.html", "build": "parcel build index.html" and run commands npm run start/npm start and npm run build accordingly which will call the scripts we wrote.

# Note 2: React.createElement

- React.createElement is a method that creates and returns a new React element of the given type. It takes three arguments: the type of the element (e.g., 'div', 'h1', or a custom component), an object containing the element's properties (props), and any child elements or text content.
- Example: React.createElement('h1', {className: 'header'}, 'Hello, world!') creates an h1 element with class 'header' and text 'Hello, world!'.
- React.createElement creates an object not an HTML element. But when rendered, React converts this object into an actual HTML element in the DOM.

# Note 3: JSX

- JSX is a syntax extension for JavaScript that looks similar to HTML. It allows us to write HTML-like code within our JavaScript code, making it easier to create and visualize the structure of our UI components.
- React is different and JSX is different. React is a library for building user interfaces, while JSX is a syntax extension that makes it easier to write React components.
- JSX is not html in JS. It is a syntax extension that allows us to write HTML-like code within our JavaScript code. JSX is transformed into regular JavaScript code by a compiler (like Babel) before it is executed in the browser.

# Note 4: Who do we write code for? machine or humans?

- It's written for both actually but primarily for humans. We write code in a way that is easy for humans to read and understand, while also ensuring that it can be executed by machines.

# Note 5: Component Composition

- Component composition is the process of combining multiple components to create a more complex component. This allows us to build reusable and modular UI components that can be easily combined and reused throughout our application.

# Note 6: Writing js in JSX

- We can write js in JSX by using curly braces {}. Anything inside the curly braces is treated as JavaScript code and will be evaluated.
- Example: <h1>{2 + 3}</h1> will render as <h1>5</h1>.
- We can also use JavaScript expressions, variables, and functions inside the curly braces.
