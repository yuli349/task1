import './UserColumn.scss';
import React from "react";
import Avatar from '../../components/avatar/Avatar';
import UserName from '../../components/userName/UserName';

export default class UserColumn extends React.Component {
    render() {
        return (
            <div className="column">
                <div className="column__user">
                    <Avatar userEmoji={this.props.emoji}/>
                    <UserName name={this.props.item.name}/>
                    <div className="column__user-value">{this.props.item.valueText}</div>
                </div>
                <div className="column__block">
                    {this.props.index}
                </div>
            </div>
        )
    }
}