import React from "react";
import ReactDOM from "react-dom/client";
// Creating a normal heading element and rendering it on the page

/*const heading = React.createElement("h1", {id: "heading"}, "Hello World");

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); */

// Creating a nested parent element and rendering it on the page

// Using core react
// const parent = React.createElement("div", {}, [React.createElement("div", {}, React.createElement("h1", {}, "Hi, This is h1")),
// React.createElement("div", {}, React.createElement("h2", {}, "Hi, This is h2"))
// ])

// Now, using JSX - HTML like - Transpiled by parcel/babel before it reaches js
// JSX  => React.createElement => ReactElement - Js Object => HTMLElement (Render)
const jsxHeading = <h1 id="heading">Hello, this is JSX</h1>;

// React Component
// 1. Class based components - OLD way (nobody uses this)
// 2. Functional components - NEW way
// - Normal js function but first letter should be capital
// - React functional component is a function which returns some jsx code
// One way
const Title = () => (
  <h1 id="title" tabIndex="5">
    This is a title component using jsx
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {/* These three things are the same thing */}
    {Title()}
    <Title />
    <Title></Title>
    <h2>Hello this is the heading component</h2>
  </div>
);

// Another way
// const HeadingComponent2 = () => <h1> This is another heading component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
