const parent = React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"child"},
[
    React.createElement("h1",{},"I'm h1"),
React.createElement("h2",{},"I'm h2"),
    ]),
]);
const root = React.createRoot(document.getElementById("root"));
root.render(parent);