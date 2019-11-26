import React, {Component} from 'react';
import PhotoItem from './PhotoItem';
import PropTypes from 'prop-types';


class  Photos extends Component {
 
  render(){
    return this.props.photos.map((photo) => (
      
       <PhotoItem key={photo.id} photo ={photo}
    />
    ))
  }
 
}

//PropTypes
Photos.propTypes ={
    photo: PropTypes.object.isRequired   
}

export default Photos;
