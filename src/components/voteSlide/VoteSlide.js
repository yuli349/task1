import './VoteSlide.scss';
import React from "react";
import Avatar from '../../components/avatar/Avatar';
import UserName from '../../components/userName/UserName';

export default class VoteSlide extends React.Component {
    render() {
        return (
            <div className="vote__slide">
                {this.props.items.map((item) => {
                    return (
                        <div key={item.id}
                             data-action="update"
                             data-params={JSON.stringify({ alias: 'vote', data: Object.assign({}, this.props.data, {selectedUserId: item.id})})}
                             className={`vote__slide-item ${item.id === this.props.selectedUser ? 'vote__slide-selected' : ''}`
                             }>
                            <Avatar avatar={item.avatar} userEmoji={item.id === this.props.selectedUser ? '👍' : ''}/>
                            <UserName name={item.name}/>
                        </div>
                    );
                })}
            </div>
        )
    }
}
