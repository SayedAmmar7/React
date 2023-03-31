// using js to manipulate DOM
/* var newHeading = document.createElement("h1"); 
  newHeading.innerHTML = "Hello Everyone"
// var headingText = document.createTextNode("My New Heading");
// newHeading.appendChild(headingText);
var parentElement = document.getElementById("root");
parentElement.appendChild(newHeading); */ // using react
/*   const heading = React.createElement("h1", {}, "Hello Hello EveryOne");
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(heading); */ const heading1 = React.createElement("h1", {}, "Hello EveryOne");
const heading2 = React.createElement("h2", {}, "Hello Hello EveryOne");
const container = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.7c0ccee6.js.map
