import React from "react";
import PropTypes from "prop-types";
import FileNames from "./FileNames";
import FileSearchForm from "./FileSearchForm";

export default class FileApp extends React.Component {
    state = { name: "", files: [] };

    componentDidMount = () => {
        this.setState({ name: this.props.name });
        this.setState({ files: this.props.data });
    };

    handleSearch = files => {
        this.setState({ files: files });
    };

    render = () => {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <FileSearchForm handleSearch={this.handleSearch} />
                    </div>
                </div>
                <br />
                <FileNames files={this.state.files} />
                <br />
                <button className="btn btn-secondary float-right">
                    {this.state.name} says: {this.state.files.length} files
                </button>
            </div>
        );
    };
}