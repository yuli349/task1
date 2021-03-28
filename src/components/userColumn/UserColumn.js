import './UserColumn.scss';
import React from 'react';
import Avatar from '../avatar/Avatar';
import UserName from '../userName/UserName';

export default class UserColumn extends React.Component {
    render() {
        return (
            <div className={`column ${this.props.selectedUserId === this.props.user.id ? 'selected' : ''}`}>
                <div className="column__user">
                    <Avatar
                        avatar={this.props.user.avatar}
                        userEmoji={this.props.emoji}
                    />
                    <UserName name={this.props.user.name} />
                    <div className="column__user-value">{this.props.user.valueText}</div>
                </div>
                <div className="column__block">
                    {this.props.index}
                </div>
            </div>
        );
    }
}
