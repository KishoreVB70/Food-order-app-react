import React from "react";
import ReactDOM from "react-dom/client";

const Body = () => (
    <div>
        <h1>Welcome to the food app</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body></Body>);

