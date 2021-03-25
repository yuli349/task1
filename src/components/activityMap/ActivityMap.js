import './ActivityMap.scss';
import React from "react";

function getOrientation() {
    if (window.innerWidth < window.innerHeight) {
        return 'portrait';
    }
    return 'landscape';
}

function renderColumn(item) {
    switch (true) {
        case item > 0 && item < 3:
            return 'mid';
        case item >= 3 && item < 5:
            return 'max';
        case item >= 5:
            return 'extra';
        default:
            return 'min';
    }
}

function renderZIndex(index) {
    if (getOrientation() === 'portrait') {
        return index;
    }
    return 0;
}

export default class ActivityMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newWeek: this.getWeek()};
        this.setNewWeek();
    }

    getWeek() {
        let newWeek = [];
        for (let value of Object.values(this.props.map)) {
            const days = [...value];
            const splitArr = new Array(Math.ceil(days.length / 2))
                .fill(null).map(_ => days.splice(0, 2));
            if (getOrientation() === 'landscape') {
                newWeek.push(splitArr.map((item) => item.reduce((a, b) => a + b, 0)));
            }
            else {
                newWeek.push(value);
            }
        }
        return newWeek;
    }
    setNewWeek() {
        this.setState({
            newWeek: this.getWeek()
        });
    }
    componentDidMount() {
        window.addEventListener('resize', this.setNewWeek.bind(this));
    }
    render() {
        return (
            <div className="activity__map">
                {this.state.newWeek.map((items, index) => {
                    return (
                        <div key={index} className="activity__day">
                            {items.map((item, ind) => {
                                return (
                                    <div key={ind}
                                         style={{ zIndex: `${renderZIndex(ind)}` }}
                                         className={`activity__item size_${renderColumn(item)}`}/>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        )
    }
}