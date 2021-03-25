import React from 'react';
import './Diagram.scss';
import Header from '../../components/header/Header';
import DiagramDonut from '../../components/diagramDonut/DiagramDonut';
import DiagramCategories from '../../components/diagramCategories/DiagramCategories';

export default class Diagram extends React.Component {
    getCategoriesValue() {
        return this.props.data.categories.map(a => Number(a.valueText.split(' ')[0]));
    }

    render() {
        const { data } = this.props;
        return (
            <div className="diagram">
                <Header title={data.title} subtitle={data.subtitle}/>
                <div className="diagram__container">
                    <DiagramDonut data={data} values={this.getCategoriesValue()}/>
                    <DiagramCategories categories={data.categories}/>
                </div>
            </div>
        );
    }
}