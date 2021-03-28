import React from 'react';
import './Header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__title">{ this.props.title }</div>
                <div className="header__subtitle">{ this.props.subtitle }</div>
            </div>
        );
    }
}
