// Create Elements using react

const heading = React.createElement(
    "h1",
    {
        id: "title",
        class : "element",
        style : {
            color: "#4a1472",
        }
    },
    "Namaste everyone !");

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);


// Create multiple elements inside a root
const heading1 = React.createElement("h1", { id : "head1"}, "Heading 1");
const heading2 = React.createElement("h2", {}, "Heading 2");
const header = React.createElement("header", {}, [heading1, heading2]);

const newRoot = ReactDOM.createRoot(document.getElementById("root"));
newRoot.render(header);
