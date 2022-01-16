import * as axios from 'axios';
import React from 'react';

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                this.props.setUsers(response.data.items);

                console.log('again');
            });
    }

    setUsers = () => {
        console.log(this.props.users.length);

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                console.log(this, '2');
                this.props.setUsers(response.data.items);

                console.log('again');
            });
    };
    render() {
         

        return <div>{
            this.props.users.map((user) => 
                <div>{user.name}
                    <div>
                        {user.followed 
                                    ?  <button onClick={() => {this.props.unfollow(user.id) }}>unfollow</button>
                                    : <button onClick={() => {this.props.follow(user.id); }}>follow</button>}  
                    </div>
                </div>)

            }</div>;
    }
}

export default Users;
