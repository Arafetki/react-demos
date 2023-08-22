import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
class App extends Component{
  constructor(){
    super()
    this.state={
      monsters:[],
      searchInput:""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((users)=>{
      this.setState(()=>({monsters:users}))
    })
    .catch((err)=>console.error(err))
  }

  onChangeHandler=(event)=>{
    this.setState(()=>({searchInput:event.target.value}))
  }
  
  render(){
    const filteredMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })
    return (
      <div className="App">
          <SearchBox onChangeHandler={this.onChangeHandler} placeHolder="search monsters" className='search-box'/>
          <CardList monsters={filteredMonsters}/>
      </div>      
    )
  }
}

export default App;
