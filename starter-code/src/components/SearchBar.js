import React from 'react';


const SearchBar = (props) => {
    return (
        <div>
          <p>Search</p>
          <input type="text" name="searchBar"  defaultValue="" onChange={props.onChange}/>
          <input type="checkbox" name="showStock"/>
          <label htmlFor="">Only show products on stock</label>
        </div>
    )
}

export default SearchBar;