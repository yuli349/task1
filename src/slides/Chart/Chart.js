import React from 'react';

import './Chart.scss';
import Header from '../../components/header/Header';
import Avatar from '../../components/avatar/Avatar';
import UserName from '../../components/userName/UserName';
import ChartColumns from '../../components/chartColumns/СhartColumns';

export default class Chart extends React.Component {
    getChartValues() {
        const index = this.props.data.values.findIndex((p) => p.active === true);
        return this.props.data.values.slice(index - 6, index + 3);
    }

    render() {
        const { data } = this.props;
        return (
            <div className="chart">
                <Header title={data.title} subtitle={data.subtitle} />
                <div className="chart__container">
                    <ChartColumns values={this.getChartValues()} />
                    <div className="chart__leaders">
                        {data.users.slice(0, 2).map((item) => (
                            <div key={item.id} className="chart__leaders-item">
                                <Avatar avatar={item.avatar} />
                                <div>
                                    <UserName name={item.name} />
                                    <div className="chart__leaders-item-value">{item.valueText}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
