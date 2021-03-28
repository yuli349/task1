import React from 'react';

import './UserName.scss';

export default class UserName extends React.Component {
    render() {
        return (
            <div className="name">{this.props.name}</div>
        );
    }
}
