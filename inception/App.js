// Creating a normal heading element and rendering it on the page

/*const heading = React.createElement("h1", {id: "heading"}, "Hello World");

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); */

// Creating a nested parent element and rendering it on the page 

const parent = React.createElement("div", {}, [React.createElement("div", {}, React.createElement("h1", {}, "Hi, This is h1")),
React.createElement("div", {}, React.createElement("h2", {}, "Hi, This is h2"))
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);