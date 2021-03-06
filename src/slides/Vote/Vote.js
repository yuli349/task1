import React from 'react';

import './Vote.scss';
import VoteSlide from '../../components/voteSlide/VoteSlide';
import Header from '../../components/header/Header';
import API from '../../data/data.json';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chunks: this.getChunks()};
        this.setChunks();
    }
    getChunks() {
        let chunks = 6;
        if (window.screen.orientation.type.match(/\w+/)[0] === 'portrait') {
            chunks = 8;
        }
        return chunks;
    }
    setChunks() {
        this.setState({
            chunks: this.getChunks()
        });
    }
    componentDidMount() {
        window.screen.orientation.onchange = this.setChunks.bind(this);
    }
    render() {
        const users = [...API[2].data.users];
        const splitArr = new Array(Math.ceil(users.length / this.state.chunks))
            .fill(null).map(_ => users.splice(0, this.state.chunks));
        return (
            <div className="vote">
                <Header title={API[2].data.title} subtitle={API[2].data.subtitle}/>

                <div className="vote__slider">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={this.state.chunks === 6 ? 60 : 150}
                        touchEnabled={false}
                        totalSlides={splitArr.length}
                        orientation={'vertical'}
                    >
                        <Slider>
                            {splitArr.map((arr, index) => {
                                return (
                                    <Slide index={index}>
                                        <VoteSlide
                                            selectedUser={API[2].data.selectedUserId}
                                            key={index}
                                            items={arr}/>
                                    </Slide>
                                );
                            })}
                        </Slider>
                        <div className="vote__slider-btns">
                            <ButtonBack/>
                            <ButtonNext/>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        );
    }
}