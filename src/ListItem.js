import React from 'react';
import './ListItem.css';

const ListItem = ({Item, setPopUp, setSelectedImage}) => {
  
  const displayImageInfo = (selectedImage) => {
    setPopUp(true)
    setSelectedImage(selectedImage)
  };

  return (
    <div className='column'>
       <div onClick={()=>displayImageInfo(Item)}>
          <img className='image-style'
              src= {Item.previewURL} 
              alt="preview image" 
              width="100px"
              height="100px"
              >
          </img>
        </div>
    </div>
    
  )
}

export default ListItem
