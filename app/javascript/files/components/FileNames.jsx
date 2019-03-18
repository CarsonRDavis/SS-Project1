import React from "react";
import FileName from "./FileName";

export default class FileNames extends React.Component {
    render = () => {
        var files = [];
        this.props.files.forEach(function(f, index) {
            files.push(<FileName file={f} key={"file_" + index} />);
        });

        return <ul className="list-group">{files}</ul>;
    };
}