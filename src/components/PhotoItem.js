import React, {Component} from 'react';
import PropTypes from 'prop-types';


class  PhotoItem extends Component {
    getStyle =() =>{
        return {
            background :'#f4f4f4',
            borderBottom : '1px #ccc dotted',
            paddingLeft:'10px'
        }
     }


  render(){
    const{id,title,url,thumbnailUrl} = this.props.photo;
    return (
        <div style={this.getStyle()}> 
           <p> 
           <p style={{fontWeight:'bold'}}  >{title} </p>
           <img src={thumbnailUrl} alt="image"  onMouseOver={e => (e.currentTarget.src = url)}
            onMouseOut = {e => (e.currentTarget.src = thumbnailUrl)}/>;
           </p>
        </div>
    )
    
  }
 
}


//PropTypes
PhotoItem.propTypes ={
    photo: PropTypes.object.isRequired
   
}




export default PhotoItem;
