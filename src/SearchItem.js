import React from 'react'
import { useRef } from 'react'

const SearchItem = ({search, setSearch, handleSubmit}) => {
  const inputRef = useRef();

  return (
    <form className='search-form'  onSubmit={handleSubmit}>
        
        <input className="search-txt-box"
            autoFocus
            ref={inputRef}
            id='searchItem'
            type='text'
            placeholder='Search image'
            role='searchBox'
            value={search}
            onChange={(e) => setSearch(e.target.value)}>
        </input>
        <button className="buttonStyle" type='submit'
            onClick={() => inputRef.current.focus()}>
                search
            </button>
    </form>
  )
}

export default SearchItem