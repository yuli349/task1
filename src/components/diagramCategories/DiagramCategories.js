import React from 'react';

import './DiagramCategories.scss';

function renderDiffText(str) {
    return str.split(' ')[0];
}

export default class DiagramCategories extends React.Component {
    render() {
        return (
            <div className="diagram__categories">
                {this.props.categories.map((item, index) => (
                    <div key={index} className="diagram__category">
                        <div className="diagram__category-left">
                            <div className="diagram__category-circle" />
                            <div className="diagram__category-title">{item.title}</div>
                        </div>
                        <div className="diagram__category-right">
                            <div className="diagram__category-title">{renderDiffText(item.differenceText)}</div>
                            <div className="diagram__category-value">{renderDiffText(item.valueText)}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
