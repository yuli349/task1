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
        const users = data.users;
        const { chunks } = this.state;
        const offset = data.offset || 0;
        const usersByOffset = this.getUsersByOffset(offset).slice(0, chunks);

        let prevOffset = users.indexOf(usersByOffset[0]) - chunks;
        prevOffset = prevOffset > 0 ? prevOffset : 0;

        const dataParamsPrev = JSON.stringify({
            alias: 'vote',
            data: Object.assign({}, data, {offset: prevOffset}),
        });
        const dataParamsNext = JSON.stringify({
            alias: 'vote',
            data: Object.assign({}, data, {offset: users.indexOf(usersByOffset[usersByOffset.length - 1]) + 1}),
        });

        return (
            <div className="vote">
                <Header title={data.title} subtitle={data.subtitle}/>

                <div className={`vote__slider ${usersByOffset.length < 5 ? 'short' : ''}`}>
                    <div className="vote__slider-item">
                        <VoteSlide
                            selectedUser={data.selectedUserId}
                            items={usersByOffset}
                            data={data}
                        />
                    </div>
                    <div className="vote__slider-btns">
                        <button data-action="update" data-params={dataParamsPrev} disabled={offset === 0} className="vote__slider-back-button"/>
                        <button data-action="update" disabled={offset >= users.length - chunks} className="vote__slider-next-button" data-params={dataParamsNext}
                        />
                    </div>
                </div>
            </div>
        );
    }
}