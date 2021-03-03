import React from 'react';

import './Leaders.scss';
import UserColumn from '../../components/userColumn/UserColumn';
import API from '../../data/data.json';

export default class Leaders extends React.Component {

    render() {
        return (
            <div className="leaders">
                <div className="leaders__title">{ API[0].data.title }</div>
                <div className="leaders__subtitle">{ API[0].data.subtitle }</div>

                <div className="columns__container">
                    <UserColumn index={5} item={API[0].data.users[4]} emoji={'👍'}></UserColumn>
                    <UserColumn index={3} item={API[0].data.users[2]}/>
                    <UserColumn index={1} item={API[0].data.users[0]} emoji={API[0].data.emoji}/>
                    <UserColumn index={2} item={API[0].data.users[1]}/>
                    <UserColumn index={4} item={API[0].data.users[3]}/>
                </div>
            </div>
        );
    }
}