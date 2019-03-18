import React from "react";

export default class FileName extends React.Component {
    render = () => {
        return <li className="list-group-item"> {this.props.file} </li>;
    };
}