import React from 'react'
import ListItem from './ListItem';

const Items = ({Items, popUp, setPopUp, setSelectedImage}) => {
  return (
    <>
        {Items.hits.map((Item) => (
            <ListItem key={Item.id} Item = {Item} popUp={popUp} setPopUp={setPopUp} setSelectedImage={setSelectedImage}/>
        ))}
    </>
  )
}

export default Items;
