import React, {Component} from 'react';
import UserPostItem from './UserPostItem';
import PropTypes from 'prop-types';


class  UserPosts extends Component {
 
  render(){
    return this.props.userposts.map((userpost) => (
       <UserPostItem key={userpost.id} userpost ={userpost}
       delUserPost={this.props.delUserPost}/>
    ))
  }
 
}

//PropTypes
UserPosts.propTypes ={
  userpost: PropTypes.object.isRequired,
  delUserPost: PropTypes.func.isRequired
}

export default UserPosts;
