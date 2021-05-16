import { Component } from 'react'
import './App.css'
import CardList from './components/card-list'
import SearchBox from './components/search-box'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      userInput: '',
    }
  }

  componentDidMount = () => {
    this.getMonsters()
  }

  getMonsters = async () => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await userResponse.json()
    this.setState({
      monsters: users,
    })
  }

  handleInputChange = (event) => {
    this.setState({
      userInput: event.target.value,
    })
  }

  render() {
    const { monsters, userInput } = this.state
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(userInput.toLowerCase())
    )
    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleInputChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
