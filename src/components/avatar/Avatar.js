import './Avatar.scss';
import React from 'react';

export default class Avatar extends React.Component {
    render() {
        // eslint-disable-next-line global-require,import/no-dynamic-require
        const avatarUrl = require(`../../assets/images/4x/${this.props.avatar}`).default;

        return (
            <div className="avatar">
                <div className="img" style={{ backgroundImage: `url(${avatarUrl})` }} />
                <div className="emoji">{ this.props.userEmoji }</div>
                <div className="emoji selected">👍</div>
            </div>
        );
    }
}
