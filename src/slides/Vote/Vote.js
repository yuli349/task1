import React from 'react';

import './Vote.scss';
import VoteSlide from '../../components/voteSlide/VoteSlide';
import Header from '../../components/header/Header';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function getOrientation() {
    if (window.innerWidth < window.innerHeight) {
        return 'portrait';
    }
    return 'landscape';
}

export default class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chunks: this.getChunks()};
        this.setChunks();
    }
    getChunks() {
        let chunks = 6;
        if (getOrientation() === 'portrait') {
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
        window.addEventListener('resize', this.setChunks.bind(this));
    }
    render() {
        const { data } = this.props;
        const users = [...data.users];
        const splitArr = new Array(Math.ceil(users.length / this.state.chunks))
            .fill(null).map(_ => users.splice(0, this.state.chunks));
        return (
            <div className="vote">
                <Header title={data.title} subtitle={data.subtitle}/>

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
                                    <Slide index={index} key={index}>
                                        <VoteSlide
                                            selectedUser={data.selectedUserId}
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