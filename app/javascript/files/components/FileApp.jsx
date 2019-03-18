import React from "react";
import PropTypes from "prop-types";
import FileNames from "./FileNames";

export default class FileApp extends React.Component {
    state = { name: "", files: [] };

    componentDidMount = () => {
        this.setState({ name: this.props.name });
        this.setState({ files: this.props.data });
    };

    render = () => {
        return (
            <div>
                <FileNames files={this.state.files} />
                <br />
                <button className="btn btn-secondary float-right">
                    {this.state.name} says: {this.state.files.length} files
                </button>
            </div>
        );
    };
}