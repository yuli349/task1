import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Leaders from './slides/Leaders/Leaders';
import Vote from './slides/Vote/Vote';
import Chart from './slides/Chart/Chart';
import data from './data/data.json';

const urlParams = new URLSearchParams(window.location.search);
const slideId = parseInt(urlParams.get('slide') || '1', 10);
const slide = data[slideId - 1] || data[0];
const theme = urlParams.get('theme') === 'light' ? 'light' : 'dark';

function renderSlide(slide) {
    switch(slide.alias) {
        case 'leaders':
            return <Leaders data={slide.data} />;
        case 'vote':
            return <Vote data={slide.data} />;
        case 'chart':
            return <Chart data={slide.data} />;

        default:
            return <div>unknown alias</div>;
    }
}

ReactDOM.render(
    <React.StrictMode>
       {/* <div className="theme_light">
            <Chart/>
        </div>*/}
        <div className={`theme_${theme}`}>
            {renderSlide(slide)}
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals