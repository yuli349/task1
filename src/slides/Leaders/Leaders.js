import React from 'react';

import './Leaders.scss';
import UserColumn from '../../components/userColumn/UserColumn';
import Header from '../../components/header/Header';

export default class Leaders extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <div className="leaders">
                <Header title={data.title} subtitle={data.subtitle}/>

                <div className="leaders__container">
                    <UserColumn index={5} item={data.users[4]} emoji={'👍'}/>
                    <UserColumn index={3} item={data.users[2]}/>
                    <UserColumn index={1} item={data.users[0]} emoji={data.emoji}/>
                    <UserColumn index={2} item={data.users[1]}/>
                    <UserColumn index={4} item={data.users[3]}/>
                </div>
            </div>
        );
    }
}
