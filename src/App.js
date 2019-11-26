import React, {Component} from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import UserPosts from './components/UserPosts';
import AddUserPost from './components/AddUserPost';
import Photos from './components/Photos';
import Header from './components/layout/Header';
import About from './components/pages/About';
import './App.css';
import axios from 'axios';

class  App extends Component {
  state ={
    userposts:[],
	  photos:[]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10').then(
      res => this.setState({userposts:res.data}))
	  
	axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then(
      res => this.setState({photos:res.data}))
  }

  delUserPost =(id) =>{
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>
    this.setState({userposts: [...this.state.userposts.filter(userpost => userpost.id !== id)]})); 
}

addUserPost =(title,body) =>{
  axios.post('https://jsonplaceholder.typicode.com/posts',{
  title,
  body
 }).then(res => this.setState({userposts:[...this.state.userposts,res.data]}))

}

  render(){
        return (
          <Router>
              <div>
              <div className="container">
                <Header/>
                <div className="content">
                <Route exact path="/" render={props =>(
                  <React.Fragment>
                      <AddUserPost addUserPost={this.addUserPost}/>
                      <UserPosts userposts ={this.state.userposts} 
                        delUserPost={this.delUserPost}/>  
                        <h2 style={headerStyle}>Photos</h2> 
						          <Photos photos ={this.state.photos} />
                  </React.Fragment>
                )}/>  
                 <Route exact path="/about" component={About} /> 
                 </div>   
              </div>
             </div>
          </Router>   
    );
  }
}

const headerStyle={
  
  color:'#333',
  fontWeight:'bold',
  marginTop:'15px',
  marginBottom:'15px'

}
export default App;
