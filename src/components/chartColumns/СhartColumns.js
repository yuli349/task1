import React from 'react';
import './СhartColumns.scss';

export default class ChartColumns extends React.Component {
    render() {

        const { values } = this.props;
        let maxValue = Math.max.apply(Math, values.map(function(o) { return o.value; }));
        console.log(maxValue);

        return (
            <div className='chart__columns'>
                {values.map((item, index) => {
                    return (
                        <div key={index}
                            className={`column__item ${item.active === true ? 'active' : ''}`}
                             style={{ width: `${100/values.length + '%'}`}}
                        >
                            <div className='column__item-value'>{item.value > 0 ? item.value : ''}</div>
                            <div className="column__item-part"
                                 style={{ height: `${item.value*43/maxValue + 'vh'}`}}
                            />
                            <div className='column__item-name'>{item.title}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}