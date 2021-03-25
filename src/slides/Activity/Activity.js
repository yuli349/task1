import React from 'react';
import './Activity.scss';
import Header from '../../components/header/Header';
import ActivityMap from '../../components/activityMap/ActivityMap';

function getOrientation() {
    if (window.innerWidth < window.innerHeight) {
        return 'portrait';
    }
    return 'landscape';
}

function renderDimentionText() {
    if (getOrientation() === 'portrait') {
        return '1 час';
    }
    return '2 часа';
}

export default class Activity extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className="activity">
                <Header title={data.title} subtitle={data.subtitle}/>
                <div className="activity__container">
                    <ActivityMap map={data.data}/>
                    <div className="activity__dimensions">
                        <div className="dimension dimension__interval">
                            <div className="dimension__part"/>
                            <div>{ renderDimentionText() }</div>
                        </div>
                        <div className="dimension dimension__min">
                            <div className="dimension__part"/>
                            <div>0</div>
                        </div>
                        <div className="dimension dimension__mid">
                            <div className="dimension__part"/>
                            <div>1 — 2</div>
                        </div>
                        <div className="dimension dimension__max">
                            <div className="dimension__part"/>
                            <div>3 — 4</div>
                        </div>
                        <div className="dimension dimension__extra">
                            <div className="dimension__part"/>
                            <div>5 — 6</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}