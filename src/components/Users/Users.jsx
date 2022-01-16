import * as axios from 'axios';
import React from 'react';

class Users extends React.Component {
    

    setUsers = () => {
        console.log(this.props.users.length);

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                console.log(this, '2');
                this.props.setUsers(response.data.items);

                
            });
    };
    componentDidMount(){
        console.log('agai2n');
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users?page=2&count=3')
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)


                console.log('again');
            })

    }
    render() {
        let pages = [];
        let pagesNumber = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        for(let i = 1; i <= pagesNumber; i++){
            pages.push(i)
        }
        
        console.log(this.props.currentPage)
        return <div>
            <div>
                {pages.map(p => {
                    return <span onClick={()=>{this.props.changeCurrentPage(p)}}>{p}</span>
                })}
            </div>
            {
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
