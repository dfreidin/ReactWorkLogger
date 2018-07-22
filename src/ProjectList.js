import React, {Component} from "react";

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

class ProjectList extends Component {
    formatTime(minutes) {
        return `${Math.floor(minutes / 60)}:${(minutes % 60).pad(2, "0")}`
    }
    render() {
        return (
            <div style={{
                    border: "solid black",
                    margin: "10px",
                    padding: "5px",
                    display: "inline-block"
                }}>
                <p>{this.props.title} {this.formatTime(this.props.list.reduce((a, b) => a + b.minutes, 0))}</p>
                {this.props.list.map((project) => <p key={project.description}>{this.formatTime(project.minutes)} {project.description}</p>)}
            </div>
        )
    }
}

export default ProjectList;