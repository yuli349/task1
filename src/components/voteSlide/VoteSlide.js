import React from 'react';

import './VoteSlide.scss';
import Avatar from '../avatar/Avatar';
import UserName from '../userName/UserName';

export default class VoteSlide extends React.Component {
    render() {
        return (
            <div className="vote__slide">
                {this.props.items.map((item) => (
                    <div
                        key={item.id}
                        className={`vote__slide-item ${item.id === this.props.selectedUser ? 'vote__slide-selected' : ''}`}
                    >
                        <Avatar avatar={item.avatar} userEmoji={item.id === this.props.selectedUser ? '👍' : ''} />
                        <UserName name={item.name} />
                    </div>
                ))}
            </div>
        );
    }
}
