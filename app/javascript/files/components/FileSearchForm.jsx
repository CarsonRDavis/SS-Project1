import React from "react";
import ReactDOM from "react-dom";

export default class FileSearchForm extends React.Component {
    handleSearch = () => {
        var query = ReactDOM.findDOMNode(this.refs.query).value;
        var self = this;
        $.ajax({
            url: "/say/filesearch",
            data: { query: query },
            success: function(data) {
                self.props.handleSearch(data);
            },
            error: function(xhr, status, error) {
                alert("Search error: ", status, xhr, error);
            }
        });
    };
    render = () => {
        return (
            <input
                onChange={this.handleSearch}
                type="text"
                className="form-control"
                placeholder="Type search phrase here..."
                ref="query"
            />
        );
    };
}