import React, { Component } from 'react';
import data from './data.json'
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable'



class App extends Component {
constructor() {
  super ()
  this.state = {
    data: [...data.data],
    filterData: [...data.data]
  }
  
}
  search (e) {
    const {value} = e.target
    let newArray = [...this.state.data].filter(word=>{
      return word.name.includes(value)
    })
    console.log(newArray)
    this.setState({
      filterData: newArray 
    })
  }
  
  render() {
    return (
      <div className="App">
            <h1>IronStore</h1>
            <SearchBar onChange={(e) => this.search(e)} />
            <ProductTable products={ this.state.filterData } />
      </div>
    );
  }
}

export default App;
