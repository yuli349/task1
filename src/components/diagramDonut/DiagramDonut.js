import React from 'react';
import './DiagramDonut.scss';
import * as d3 from "d3";

export default class DiagramDonut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: this.getWidth()};
        this.setWidth();
    }
    getWidth() {
        let width = window.innerWidth * 0.36;
        if (window.screen.orientation.type.match(/\w+/)[0] === 'portrait') {
            width = window.innerHeight * 0.49;
        }
        return width;
    }
    setWidth() {
        this.setState({
            width: this.getWidth()
        });
    }

    drawDonutSvg() {
        d3.select("svg").remove();

        const data = [{
            percent: this.props.values[0],
            pie: 0
        }, {
            percent: this.props.values[1],
            pie: 1
        }, {
            percent: this.props.values[2],
            pie: 2
        }, {
            percent: this.props.values[3],
            pie: 3
        }];

        const width = this.state.width;
        const height = this.state.width;
        const radius = Math.min(width, height) / 2;

        const arc = d3.svg.arc()
            .outerRadius(radius)
            .innerRadius(radius* 0.7)
            .cornerRadius(7)

        const pie = d3.layout.pie()
            .sort(null)
            .value(function (d) { return d.percent });

        const svg = d3.selectAll('.diagram__donut').append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        const defs = svg.append("svg:defs");

        let rad_gradient = defs.append("radialGradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("cx", '50%')
            .attr("cy", '50%')
            .attr("r", "50%")
            .attr("fx", '50%')
            .attr("fy", '50%')
            .attr('gradientTransform', "translate(-" + width / 2 + ", -" + height / 2 + ")")
            .attr("id", 'gradient0')
        rad_gradient.append("stop").attr("offset", "63%").style("stop-color", "rgba(255, 163, 0, 0.8)");
        rad_gradient.append("stop").attr("offset", "99%").style("stop-color", "rgba(91, 58, 0, 0.8)");
        rad_gradient.append("stop").attr("offset", "99.5%").style("stop-color", "rgba(255, 163, 0, 0.8)");
        rad_gradient.append("stop").attr("offset", "100%").style("stop-color", "rgba(255,255,255,0.3)");

        let light_rad_gradient = defs.append("radialGradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("cx", '50%')
            .attr("cy", '50%')
            .attr("r", "50%")
            .attr("fx", '50%')
            .attr("fy", '50%')
            .attr('gradientTransform', "translate(-" + width / 2 + ", -" + height / 2 + ")")
            .attr("id", 'light_gradient0')
        light_rad_gradient.append("stop").attr("offset", "63%").style("stop-color", "rgba(255, 184, 0, 0.76)");
        light_rad_gradient.append("stop").attr("offset", "99%").style("stop-color", "rgba(255, 239, 153, 0.42)");
        light_rad_gradient.append("stop").attr("offset", "99.5%").style("stop-color", "rgba(255, 184, 0, 0.76)");
        light_rad_gradient.append("stop").attr("offset", "100%").style("stop-color", "rgba(255, 184, 0, 0.76)");

        let light_radi_gradient = defs.append("radialGradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("cx", '50%')
            .attr("cy", '50%')
            .attr("r", "50%")
            .attr("fx", '50%')
            .attr("fy", '50%')
            .attr('gradientTransform', "translate(-" + width / 2 + ", -" + height / 2 + ")")
            .attr("id", 'light_gradient1')
        light_radi_gradient.append("stop").attr("offset", "63%").style("stop-color", "rgba(255, 184, 0, 0.34)");
        light_radi_gradient.append("stop").attr("offset", "99%").style("stop-color", "rgba(255, 239, 153, 0.22)");
        light_radi_gradient.append("stop").attr("offset", "99.5%").style("stop-color", "rgba(255, 184, 0, 0.34)");
        light_radi_gradient.append("stop").attr("offset", "100%").style("stop-color", "rgba(255, 184, 0, 0.34)");

        let radi_gradient = defs.append("radialGradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("cx", '50%')
            .attr("cy", '50%')
            .attr("r", "50%")
            .attr("fx", '50%')
            .attr("fy", '50%')
            .attr('gradientTransform', "translate(-" + width / 2 + ", -" + height / 2 + ")")
            .attr("id", 'gradient1')
        radi_gradient.append("stop").attr("offset", "63%").style("stop-color", "rgba(147, 93, 0, 0.5)");
        radi_gradient.append("stop").attr("offset", "99%").style("stop-color", "rgba(41,26,0,0.5)");
        radi_gradient.append("stop").attr("offset", "99.5%").style("stop-color", "rgba(147, 93, 0, 0.5)");
        radi_gradient.append("stop").attr("offset", "100%").style("stop-color", "rgba(255, 163, 0, 0.3)");

        let light_radial_gradient = defs.append("radialGradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("cx", '50%')
            .attr("cy", '50%')
            .attr("r", "50%")
            .attr("fx", '50%')
            .attr("fy", '50%')
            .attr('gradientTransform', "translate(-" + width / 2 + ", -" + height / 2 + ")")
            .attr("id", 'light_gradient2')
        light_radial_gradient.append("stop").attr("offset", "70%").style("stop-color", "rgba(166, 166, 166, 0.27)");
        light_radial_gradient.append("stop").attr("offset", "99%").style("stop-color", "rgba(203, 203, 203, 0.10)");
        light_radial_gradient.append("stop").attr("offset", "99.5%").style("stop-color", "rgba(166, 166, 166, 0.27)");
        light_radial_gradient.append("stop").attr("offset", "100%").style("stop-color", "rgba(166,166,166,0.27)");

        let radial_gradient = defs.append("radialGradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("cx", '50%')
            .attr("cy", '50%')
            .attr("r", "50%")
            .attr("fx", '50%')
            .attr("fy", '50%')
            .attr('gradientTransform', "translate(-" + width / 2 + ", -" + height / 2 + ")")
            .attr("id", 'gradient2')
        radial_gradient.append("stop").attr("offset", "70%").style("stop-color", "rgba(155, 155, 155, 0.5)");
        radial_gradient.append("stop").attr("offset", "99%").style("stop-color", "rgba(56, 41, 0, 0.5)");
        radial_gradient.append("stop").attr("offset", "99.5%").style("stop-color", "rgba(155, 155, 155, 0.5)");
        radial_gradient.append("stop").attr("offset", "100%").style("stop-color", "rgba(255,255,255,0.3)");

        let light_radia_gradient = defs.append("radialGradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("cx", '50%')
            .attr("cy", '50%')
            .attr("r", "50%")
            .attr("fx", '50%')
            .attr("fy", '50%')
            .attr('gradientTransform', "translate(-" + width / 2 + ", -" + height / 2 + ")")
            .attr("id", 'light_gradient3')
        light_radia_gradient.append("stop").attr("offset", "70%").style("stop-color", "rgba(191, 191, 191, 0.745)");
        light_radia_gradient.append("stop").attr("offset", "99%").style("stop-color", "rgba(228, 228, 228, 0.5)");
        light_radia_gradient.append("stop").attr("offset", "99.5%").style("stop-color", "rgba(191, 191, 191, 0.745)");
        light_radia_gradient.append("stop").attr("offset", "100%").style("stop-color", "rgba(191, 191, 191, 0.745)");

        let radia_gradient = defs.append("radialGradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("cx", '50%')
            .attr("cy", '50%')
            .attr("r", "50%")
            .attr("fx", '50%')
            .attr("fy", '50%')
            .attr('gradientTransform', "translate(-" + width / 2 + ", -" + height / 2 + ")")
            .attr("id", 'gradient3')
        radia_gradient.append("stop").attr("offset", "70%").style("stop-color", "rgba(77, 77, 77, 0.5)");
        radia_gradient.append("stop").attr("offset", "99%").style("stop-color", "rgba(56, 41, 0, 0.5)");
        radia_gradient.append("stop").attr("offset", "99.5%").style("stop-color", "rgba(77, 77, 77, 0.5)");
        radia_gradient.append("stop").attr("offset", "100%").style("stop-color", "rgba(255,255,255,0.5)");

        let def = svg.append("defs");

        let filter = def.append("filter")
            .attr("id", "drop-shadow")

        filter.append("feGaussianBlur")
            .attr("in", "SourceAlpha")
            .attr("stdDeviation", 5)
            .attr("result", "blur");

        filter.append("feOffset")
            .attr("in", "blur")
            .attr("dx", 5)
            .attr("dy", 5)
            .attr("result", "offsetBlur");

        filter.append('feFlood')
            .attr("in", "offsetBlur")
            .attr("flood-color", '#fff')
            .attr("flood-opacity", 1)
            .attr("result", "offsetColor");

        let feMerge = filter.append("feMerge");

        feMerge.append("feMergeNode")
            .attr("in", "offsetBlur")
        feMerge.append("feMergeNode")
            .attr("in", "SourceGraphic");

        let g = svg.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc")
        pie(data).forEach(arc.padAngle(0.01));

        if (this.props.theme === "theme_dark") {
            g.append("path")
                .attr("d", arc)
                .style("fill", function (d) {
                    if (d.data.pie === 0) {
                        return "url(#gradient0)"
                    }
                    if (d.data.pie === 1) {
                        return "url(#gradient1)"
                    }
                    if (d.data.pie === 2) {
                        return "url(#gradient2)"
                    }
                    if (d.data.pie === 3) {
                        return "url(#gradient3)"
                    }
                })
                .style("filter", "url(#drop-shadow)")
        }
        else {
            g.append("path")
                .attr("d", arc)
                .style("fill", function (d) {
                    if (d.data.pie === 0) {
                        return "url(#light_gradient0)"
                    }
                    if (d.data.pie === 1) {
                        return "url(#light_gradient1)"
                    }
                    if (d.data.pie === 2) {
                        return "url(#light_gradient2)"
                    }
                    if (d.data.pie === 3) {
                        return "url(#light_gradient3)"
                    }
                })
        }
    }

    componentDidMount() {
        if (window.addEventListener) {
            window.addEventListener('resize', this.setWidth.bind(this));
            window.addEventListener('resize', this.drawDonutSvg.bind(this));
        }
        this.drawDonutSvg();
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