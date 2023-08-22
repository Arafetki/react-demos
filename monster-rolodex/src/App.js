import './App.css';
import { useEffect,useState } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';


const App = ()=>{

  const [searchString,setSearchString]=useState('')
  const [monsters,setMonsters]=useState([])
  const [filteredMonsters,setFilteredMonsters]=useState(monsters)

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((users)=>{
      setMonsters(users)
    })
    .catch((err)=>console.error(err))
  },[])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchString.toLowerCase())
    })
    setFilteredMonsters(newFilteredMonsters)   
  },[monsters,searchString])

  const onSearchStringChangeHandler = (event) =>{
    setSearchString(event.target.value)
  }


  return (
    <div className="App">
        <SearchBox onChangeHandler={onSearchStringChangeHandler} placeHolder="search monsters" className='search-box'/>
        <CardList monsters={filteredMonsters}/>
    </div>       
  )
}


export default App;
