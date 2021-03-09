import React from 'react';

import './Chart.scss';
import Header from '../../components/header/Header';
import API from '../../data/data.json';
import Avatar from "../../components/avatar/Avatar";
import UserName from "../../components/userName/UserName";

export default class Chart extends React.Component {
    render() {
        let maxValue = Math.max.apply(Math, API[6].data.values.map(function(o) { return o.value; }));
        console.log(maxValue);

        return (
            <div className="chart">
                <Header title={API[6].data.title} subtitle={API[6].data.subtitle}/>

                <div className="chart__container">
                    <div className='chart__columns'>
                        {API[6].data.values.map((item) => {
                            return (
                                <div className={`column__item ${item.active === true ? 'active' : ''}`}
                                     style={{ width: `${100/API[6].data.values.length + '%'}`}}
                                >
                                    <div className='column__item-value'>{item.value}</div>
                                    <div className="column__item-part"
                                         style={{ height: `${item.value*33/maxValue + 'vh'}`}}
                                    />
                                    <div className='column__item-name'>{item.title}</div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='chart__leaders'>
                        {API[6].data.users.map((item) => {
                            return (
                                <div key={item.id} className="chart__leaders-item">
                                    <Avatar avatar={item.avatar}/>
                                    <div>
                                        <UserName name={item.name}/>
                                        <div className="chart__leaders-item-value">{item.valueText}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}