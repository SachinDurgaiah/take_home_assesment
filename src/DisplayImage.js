import React from 'react'

 const DisplayImage = ({Item, setPopUp}) => {
  return (
    <div className="PopUp">
        <button className="popup-x" onClick={()=> setPopUp(false)} >X</button>
        <div className="pu-content-container">
            <img className="pu-img" src= {Item.largeImageURL} alt="image"/>
            <div className="pu-content-text">
            <p>
                UserName: <b>{Item.user} </b>
            </p>
            <p>
                collections: <b>{Item.collections}</b>
            </p>
            <p>
                downloads: <b>{Item.downloads}</b>
            </p>
            <p>
                likes: <b>{Item.likes}</b>
            </p>
            <p>
                comments: <b>{Item.comments}</b>
            </p>
            </div>
        </div>
    </div>
  )
}

export default DisplayImage;