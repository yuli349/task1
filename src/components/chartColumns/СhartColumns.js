import React from 'react';

import './СhartColumns.scss';
import getOrientation from '../../helpers/orientation';

function formatter(num) {
    return Math.abs(num) > 999 ? `${Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1))}k`
        : Math.sign(num) * Math.abs(num);
}

function renderValueSize() {
    if (getOrientation() === 'portrait') {
        return 40.4;
    }
    return 31;
}

export default class ChartColumns extends React.Component {
    render() {
        const { values } = this.props;
        const maxValue = Math.max(...values.map((o) => o.value));

        return (
            <div className="chart__columns">
                {values.map((item, index) => (
                    <div
                        key={index}
                        className={`column__item ${item.active === true ? 'active' : ''}`}
                        style={{ width: `${`${100 / values.length}%`}` }}
                    >
                        <div className="column__item-value">{item.value > 0 ? formatter(item.value) : ''}</div>
                        <div
                            className="column__item-part"
                            style={{ height: `${`${item.value * renderValueSize() / maxValue}vh`}` }}
                        />
                        <div className="column__item-name">{item.title}</div>
                    </div>
                ))}
            </div>
        );
    }
}
