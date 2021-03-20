import React from 'react';

import './Vote.scss';
import VoteSlide from '../../components/voteSlide/VoteSlide';
import Header from '../../components/header/Header';

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
        return getOrientation() === 'portrait' ? 8 : 6;
    }
    setChunks() {
        this.setState({
            chunks: this.getChunks()
        });

    }
    getUsersByOffset(offset = undefined) {
        const { users } = this.props.data;
        return offset !== undefined ? users.slice(offset) : users;
    }
    componentDidMount() {
        window.addEventListener('resize', this.setChunks.bind(this));
    }
    render() {
        const { data } = this.props;
        const { chunks } = this.state;
        const offset = data.offset;
        const usersByOffset = this.getUsersByOffset(offset);

        const users = [...usersByOffset];

        const usersFormatted = new Array(Math.ceil(users.length / chunks))
            .fill(null)
            .map(_ => users.splice(0, chunks));
        return (
            <div className="vote">
                <Header title={data.title} subtitle={data.subtitle}/>

                <div className={`vote__slider ${usersByOffset.length < 5 ? 'short' : ''}`}>
                    {usersFormatted.map((userItems, index) => {
                        return (
                            <div key={index} className="vote__slider-item">
                                <VoteSlide
                                    selectedUser={data.selectedUserId}
                                    key={index}
                                    items={userItems}/>
                            </div>
                        );
                    })}
                    <div className="vote__slider-btns">
                        <button disabled={!offset} className="vote__slider-back-button"/>
                        <button disabled={offset > users.length - chunks} className="vote__slider-next-button"/>
                    </div>
                </div>
            </div>
        );
    }
}