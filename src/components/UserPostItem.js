import React, {Component} from 'react';
import PropTypes from 'prop-types';


class  UserPostItem extends Component {
  
    getStyle =() =>{
        return {
            background :'#f4f4f4',
            borderBottom : '1px #ccc dotted',
            paddingLeft:'10px'
        }
     }

  render(){
    const{id,userId,title,body} = this.props.userpost;
    return (
        <div style={this.getStyle()}>
           <p> 
           <p style={{fontWeight:'bold'}}>{title}
           <button onClick={this.props.delUserPost.bind(this,id)} style={btnStyle}>X</button> </p>
           <p>{body} </p>
           </p>
        </div>
    )
    
  }
 
}


//PropTypes
UserPostItem.propTypes ={
    userpost: PropTypes.object.isRequired,
    delUserPost: PropTypes.func.isRequired
}

const btnStyle={
    backgroundColor: 'grey',//'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'

}


export default UserPostItem;
