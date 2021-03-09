import './Avatar.scss';
import React from "react";

export default class Avatar extends React.Component {
    render() {
        const avatarUrl = require(`../../assets/images/4x/${this.props.avatar}`).default;

        return (
            <div className="avatar">
                <div className="img" style={{ backgroundImage: `url(${avatarUrl})` }}/>
                <div className="emoji">{ this.props.userEmoji }</div>
            </div>
        )
    }
}
