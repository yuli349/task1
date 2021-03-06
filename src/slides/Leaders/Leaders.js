import React from 'react';

import './Leaders.scss';
import UserColumn from '../../components/userColumn/UserColumn';
import Header from '../../components/header/Header';
import API from '../../data/data.json';

export default class Leaders extends React.Component {

    render() {
        return (
            <div className="leaders">
                <Header title={API[0].data.title} subtitle={API[0].data.subtitle}/>

                <div className="leaders__container">
                    <UserColumn index={5} item={API[0].data.users[4]} emoji={'👍'}/>
                    <UserColumn index={3} item={API[0].data.users[2]}/>
                    <UserColumn index={1} item={API[0].data.users[0]} emoji={API[0].data.emoji}/>
                    <UserColumn index={2} item={API[0].data.users[1]}/>
                    <UserColumn index={4} item={API[0].data.users[3]}/>
                </div>
            </div>
        );
    }
}