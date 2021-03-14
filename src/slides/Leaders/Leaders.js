import React from 'react';

import './Leaders.scss';
import UserColumn from '../../components/userColumn/UserColumn';
import Header from '../../components/header/Header';

export default class Leaders extends React.Component {
    getSelectedUserPosition() {
        const position = this.props.data.users.findIndex(p => p.id === this.props.data.selectedUserId)
        return position + 1;
    }

    getVisibleUsers() {
        let newArr = [];
        if (this.getSelectedUserPosition() > 5) {
            newArr = this.props.data.users.slice(0, 4);
            newArr.push(this.props.data.users[this.getSelectedUserPosition() - 1]);
        }
        else {
            newArr = this.props.data.users.slice(0, 5)
        }

        newArr = newArr.map((user, index) => {
            user.index = index + 1;
            return user;
        })

        const fisrtIndex = newArr[0];
        newArr[0] = newArr[4];
        newArr[4] = newArr[3];
        newArr[3] = newArr[1];
        newArr[1] = newArr[2];
        newArr[2] = fisrtIndex;
        return newArr;
    }

    render() {
        const { data } = this.props;
        const visibleUsers = this.getVisibleUsers();

        return (
            <div className="leaders">
                <Header title={data.title} subtitle={data.subtitle}/>

                <div className="leaders__container">
                    {visibleUsers.map((user, index) => {
                        return (
                            <UserColumn
                                key={index}
                                index={(user.id === data.selectedUserId) && (this.getSelectedUserPosition() > 5) ? this.getSelectedUserPosition() : user.index}
                                user={user}
                                selectedUserId={data.selectedUserId}
                                emoji={ user.index === 1 ? data.emoji : ''}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}
