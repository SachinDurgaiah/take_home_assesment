import './App.css';
import {useState} from 'react';
import Items from './Items';
import SearchItem from './SearchItem';
import Header from './Header';
import DisplayImage from './DisplayImage';

function App() {
  const API_URL = 'https://pixabay.com/api/?key=*key*';
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState({});
  const [fetchErrors, setFetchErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [popUp, setPopUp] = useState(false);

  const resultSize = 15;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      console.log('initial');
      if(!search) throw Error("Please enter the text you want to look up");;
      const response = await fetch(`${API_URL}&q=${search}&image_type=photo&per_page=${resultSize}`);
      console.log(response);
      if(!response.ok) throw Error("did not get expected message");
      const listItems = await response.json();
      setItems(listItems)
      setFetchErrors(null);
    }catch(err) {
      setFetchErrors(err.message);
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
    <div className="App">
        <div className="header-style">
          <Header/>
          <SearchItem search = {search} setSearch = {setSearch} handleSubmit= {handleSubmit}/>
        </div>

        {/* Display the fetch error*/}
        {fetchErrors && <p style={{color:"red"}}>{`${fetchErrors}`}</p>}

        {/* Image list */}
        {!popUp && <div className={"body-style " + (popUp ? 'disable-click' : '')}>
          {!fetchErrors && !isLoading && <Items Items={items} popUp={popUp} setPopUp={setPopUp} setSelectedImage={setSelectedImage}/>}
        </div> }

        {/* Image pop-up */}
        {popUp && <DisplayImage Item={selectedImage} setPopUp={setPopUp}/>}
    </div>
  );
}

export default App;
