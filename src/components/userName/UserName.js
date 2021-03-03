import './UserName.scss';
import React from "react";

export default class UserName extends React.Component {
    render() {
        return (
            <div className="name">{this.props.name}</div>
        )
    }
}