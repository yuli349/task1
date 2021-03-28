import React from 'react';

import './DiagramDonut.scss';
import * as d3 from 'd3';
import getOrientation from '../../helpers/orientation';

export default class DiagramDonut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.getWidth(),
            theme: 'dark',
        };
        setTimeout(() => { this.drawDonutSvg(); }, 0);
        const urlParams = new URLSearchParams(window.location.search);
        this.state.theme = urlParams.get('theme') === 'light' ? 'light' : 'dark';
    }

    getWidth() {
        let width = window.innerWidth * 0.36;
        if (getOrientation() === 'portrait') {
            width = window.innerHeight * 0.49;
        }
        return width;
    }

    setWidth() {
        this.setState({
            width: this.getWidth(),
        });
    }

    drawDonutSvg() {
        d3.select('svg').remove();

        const data = [{
            percent: this.props.values[0],
            pie: 0,
        }, {
            percent: this.props.values[1],
            pie: 1,
        }, {
            percent: this.props.values[2],
            pie: 2,
        }, {
            percent: this.props.values[3],
            pie: 3,
        }];

        const { width } = this.state;
        const height = this.state.width;
        const radius = Math.min(width, height) / 2;

        const arc = d3.svg.arc()
            .outerRadius(radius)
            .innerRadius(radius * 0.7)
            .cornerRadius(7);

        const pie = d3.layout.pie()
            .sort(null)
            .value((d) => d.percent);

        const svg = d3.selectAll('.diagram__donut').append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        const defs = svg.append('svg:defs');

        const radGradient = defs.append('radialGradient')
            .attr('gradientUnits', 'userSpaceOnUse')
            .attr('cx', '50%')
            .attr('cy', '50%')
            .attr('r', '50%')
            .attr('fx', '50%')
            .attr('fy', '50%')
            .attr('gradientTransform', `translate(-${width / 2}, -${height / 2})`)
            .attr('id', 'gradient0');
        radGradient.append('stop').attr('offset', '63%').style('stop-color', 'rgba(255, 163, 0, 0.8)');
        radGradient.append('stop').attr('offset', '99%').style('stop-color', 'rgba(91, 58, 0, 0.8)');
        radGradient.append('stop').attr('offset', '99.5%').style('stop-color', 'rgba(255, 163, 0, 0.8)');
        radGradient.append('stop').attr('offset', '100%').style('stop-color', 'rgba(255,255,255,0.3)');

        const lightRadGradient = defs.append('radialGradient')
            .attr('gradientUnits', 'userSpaceOnUse')
            .attr('cx', '50%')
            .attr('cy', '50%')
            .attr('r', '50%')
            .attr('fx', '50%')
            .attr('fy', '50%')
            .attr('gradientTransform', `translate(-${width / 2}, -${height / 2})`)
            .attr('id', 'light_gradient0');
        lightRadGradient.append('stop').attr('offset', '63%').style('stop-color', 'rgba(255, 184, 0, 0.76)');
        lightRadGradient.append('stop').attr('offset', '99%').style('stop-color', 'rgba(255, 239, 153, 0.42)');
        lightRadGradient.append('stop').attr('offset', '99.5%').style('stop-color', 'rgba(255, 184, 0, 0.76)');
        lightRadGradient.append('stop').attr('offset', '100%').style('stop-color', 'rgba(255, 184, 0, 0.76)');

        const lightRadiGradient = defs.append('radialGradient')
            .attr('gradientUnits', 'userSpaceOnUse')
            .attr('cx', '50%')
            .attr('cy', '50%')
            .attr('r', '50%')
            .attr('fx', '50%')
            .attr('fy', '50%')
            .attr('gradientTransform', `translate(-${width / 2}, -${height / 2})`)
            .attr('id', 'light_gradient1');
        lightRadiGradient.append('stop').attr('offset', '63%').style('stop-color', 'rgba(255, 184, 0, 0.34)');
        lightRadiGradient.append('stop').attr('offset', '99%').style('stop-color', 'rgba(255, 239, 153, 0.22)');
        lightRadiGradient.append('stop').attr('offset', '99.5%').style('stop-color', 'rgba(255, 184, 0, 0.34)');
        lightRadiGradient.append('stop').attr('offset', '100%').style('stop-color', 'rgba(255, 184, 0, 0.34)');

        const radiGradient = defs.append('radialGradient')
            .attr('gradientUnits', 'userSpaceOnUse')
            .attr('cx', '50%')
            .attr('cy', '50%')
            .attr('r', '50%')
            .attr('fx', '50%')
            .attr('fy', '50%')
            .attr('gradientTransform', `translate(-${width / 2}, -${height / 2})`)
            .attr('id', 'gradient1');
        radiGradient.append('stop').attr('offset', '63%').style('stop-color', 'rgba(147, 93, 0, 0.5)');
        radiGradient.append('stop').attr('offset', '99%').style('stop-color', 'rgba(41,26,0,0.5)');
        radiGradient.append('stop').attr('offset', '99.5%').style('stop-color', 'rgba(147, 93, 0, 0.5)');
        radiGradient.append('stop').attr('offset', '100%').style('stop-color', 'rgba(255, 163, 0, 0.3)');

        const lightRadialGradient = defs.append('radialGradient')
            .attr('gradientUnits', 'userSpaceOnUse')
            .attr('cx', '50%')
            .attr('cy', '50%')
            .attr('r', '50%')
            .attr('fx', '50%')
            .attr('fy', '50%')
            .attr('gradientTransform', `translate(-${width / 2}, -${height / 2})`)
            .attr('id', 'light_gradient2');
        lightRadialGradient.append('stop').attr('offset', '70%').style('stop-color', 'rgba(166, 166, 166, 0.27)');
        lightRadialGradient.append('stop').attr('offset', '99%').style('stop-color', 'rgba(203, 203, 203, 0.10)');
        lightRadialGradient.append('stop').attr('offset', '99.5%').style('stop-color', 'rgba(166, 166, 166, 0.27)');
        lightRadialGradient.append('stop').attr('offset', '100%').style('stop-color', 'rgba(166,166,166,0.27)');

        const radialGradient = defs.append('radialGradient')
            .attr('gradientUnits', 'userSpaceOnUse')
            .attr('cx', '50%')
            .attr('cy', '50%')
            .attr('r', '50%')
            .attr('fx', '50%')
            .attr('fy', '50%')
            .attr('gradientTransform', `translate(-${width / 2}, -${height / 2})`)
            .attr('id', 'gradient2');
        radialGradient.append('stop').attr('offset', '70%').style('stop-color', 'rgba(155, 155, 155, 0.5)');
        radialGradient.append('stop').attr('offset', '99%').style('stop-color', 'rgba(56, 41, 0, 0.5)');
        radialGradient.append('stop').attr('offset', '99.5%').style('stop-color', 'rgba(155, 155, 155, 0.5)');
        radialGradient.append('stop').attr('offset', '100%').style('stop-color', 'rgba(255,255,255,0.3)');

        const lightRadiaGradient = defs.append('radialGradient')
            .attr('gradientUnits', 'userSpaceOnUse')
            .attr('cx', '50%')
            .attr('cy', '50%')
            .attr('r', '50%')
            .attr('fx', '50%')
            .attr('fy', '50%')
            .attr('gradientTransform', `translate(-${width / 2}, -${height / 2})`)
            .attr('id', 'light_gradient3');
        lightRadiaGradient.append('stop').attr('offset', '70%').style('stop-color', 'rgba(191, 191, 191, 0.745)');
        lightRadiaGradient.append('stop').attr('offset', '99%').style('stop-color', 'rgba(228, 228, 228, 0.5)');
        lightRadiaGradient.append('stop').attr('offset', '99.5%').style('stop-color', 'rgba(191, 191, 191, 0.745)');
        lightRadiaGradient.append('stop').attr('offset', '100%').style('stop-color', 'rgba(191, 191, 191, 0.745)');

        const radiaGradient = defs.append('radialGradient')
            .attr('gradientUnits', 'userSpaceOnUse')
            .attr('cx', '50%')
            .attr('cy', '50%')
            .attr('r', '50%')
            .attr('fx', '50%')
            .attr('fy', '50%')
            .attr('gradientTransform', `translate(-${width / 2}, -${height / 2})`)
            .attr('id', 'gradient3');
        radiaGradient.append('stop').attr('offset', '70%').style('stop-color', 'rgba(77, 77, 77, 0.5)');
        radiaGradient.append('stop').attr('offset', '99%').style('stop-color', 'rgba(56, 41, 0, 0.5)');
        radiaGradient.append('stop').attr('offset', '99.5%').style('stop-color', 'rgba(77, 77, 77, 0.5)');
        radiaGradient.append('stop').attr('offset', '100%').style('stop-color', 'rgba(255,255,255,0.5)');

        const def = svg.append('defs');

        const filter = def.append('filter')
            .attr('id', 'drop-shadow');

        filter.append('feGaussianBlur')
            .attr('in', 'SourceAlpha')
            .attr('stdDeviation', 5)
            .attr('result', 'blur');

        filter.append('feOffset')
            .attr('in', 'blur')
            .attr('dx', 5)
            .attr('dy', 5)
            .attr('result', 'offsetBlur');

        filter.append('feFlood')
            .attr('in', 'offsetBlur')
            .attr('flood-color', '#fff')
            .attr('flood-opacity', 1)
            .attr('result', 'offsetColor');

        const feMerge = filter.append('feMerge');

        feMerge.append('feMergeNode')
            .attr('in', 'offsetBlur');
        feMerge.append('feMergeNode')
            .attr('in', 'SourceGraphic');

        const g = svg.selectAll('.arc')
            .data(pie(data))
            .enter().append('g')
            .attr('class', 'arc');
        pie(data).forEach(arc.padAngle(0.01));

        if (document.body.classList.contains('theme_light') || this.state.theme === 'light') {
            g.append('path')
                .attr('d', arc)
                .style('fill', (d) => {
                    if (d.data.pie === 0) {
                        return 'url(#light_gradient0)';
                    }
                    if (d.data.pie === 1) {
                        return 'url(#light_gradient1)';
                    }
                    if (d.data.pie === 2) {
                        return 'url(#light_gradient2)';
                    }
                    if (d.data.pie === 3) {
                        return 'url(#light_gradient3)';
                    }
                });
        } else {
            g.append('path')
                .attr('d', arc)
                .style('fill', (d) => {
                    if (d.data.pie === 0) {
                        return 'url(#gradient0)';
                    }
                    if (d.data.pie === 1) {
                        return 'url(#gradient1)';
                    }
                    if (d.data.pie === 2) {
                        return 'url(#gradient2)';
                    }
                    if (d.data.pie === 3) {
                        return 'url(#gradient3)';
                    }
                })
                .style('filter', 'url(#drop-shadow)');
        }
    }

    render() {
        return (
            <div className="diagram__donut" id="diagram__donut">
                <div className="diagram__donut-text">
                    <div className="diagram__donut-total-text">{this.props.data.totalText}</div>
                    <div>{this.props.data.differenceText}</div>
                </div>
            </div>
        );
    }
}
