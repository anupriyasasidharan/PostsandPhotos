import React, {Component} from 'react';
import PropTypes from 'prop-types';

class  AddUserPost extends Component {
 state ={
     title:'',
     body:''
 }

 onSubmit =(e) => {
     e.preventDefault();
     this.props.addUserPost(this.state.title,this.state.body);
     this.setState({title:''});
     this.setState({body:''});
 }

 onChange = (e)=> this.setState({[e.target.name]: e.target.value}); // {title: e.target.value}
 render(){
    return (
        <form onSubmit={this.onSubmit}>
            <input type="text"
             name="title"
             style={{padding:'10px',marginBottom:'10px',width:"500px"}}  
             placeholder="Title..." 
             value={this.state.title}
             onChange={this.onChange}
                />
                <br></br>
                 <input type="text"
             name="body"
             style={{padding:'15px',width:"700px",marginBottom:'10px'}}  
             placeholder="Post..." 
             value={this.state.body}
             onChange={this.onChange}
                />
            <input type="submit" value="Submit" className="btn" 
            style={{marginLeft:'10px'}}   />
        </form>
    )
  }
 
}

AddUserPost.propTypes ={
    addUserPost: PropTypes.func.isRequired,
}

export default AddUserPost;