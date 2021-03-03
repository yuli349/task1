import './Avatar.scss';
import React from "react";
import API from "../../data/data.json";

export default class Avatar extends React.Component {
    render() {
        return (
            <div className="avatar">
                <div className="img"/>
                <div className="emoji">{ this.props.userEmoji }</div>
            </div>
        )
    }
}