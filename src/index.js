import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Leaders from './slides/Leaders/Leaders';
import Vote from './slides/Vote/Vote';
import Chart from './slides/Chart/Chart';
import Diagram from './slides/Diagram/Diagram';
import Activity from './slides/Activity/Activity';

import './index.css';

export function getData() {
    return import('./data/data.json').then(dataModule => dataModule.default);
}

export function renderTemplate(alias, data) {
    let element;
    switch(alias) {
        case 'leaders':
            element = <Leaders data={data} />;
            break;

        case 'vote':
            element = <Vote data={data} />;
            break;

        case 'chart':
            element = <Chart data={data} />;
            break;

        case 'diagram':
            element = <Diagram data={data} theme={`theme_dark`} />;
            break;

        case 'activity':
            element = <Activity data={data} />;
            break;

        default:
            element = <div>Неизвестный слайд</div>
    }

    return ReactDOMServer.renderToStaticMarkup(element);
}

// Expose global functions
if (typeof window === 'object') {
    window.getData = getData;
    window.renderTemplate = renderTemplate;
}
