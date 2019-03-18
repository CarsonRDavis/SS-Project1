import React from "react";
import ReactDOM from "react-dom";
import FileApp from "./components/FileApp";

document.addEventListener("DOMContentLoaded", () => {
    const files = document.querySelector("#files");
    const data = JSON.parse(files.getAttribute("data"));
    ReactDOM.render(<FileApp name="Your name" data={data} />, files);
});