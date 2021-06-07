import { Component } from "react";
import "./App.css";
import { CardsList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search box/search-box.component";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.eventfun = this.eventfun.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  eventfun = (event)=> {
    this.setState({ searchField: event.target.value });
    // console.log(state)
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((el) => {
      return el.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          // handleChange={(e) =>
          //   this.setState({ searchField: e.target.value }, () =>
          //     console.log("state tracker", this.state)
          //   )
          // }

          handleChange={this.eventfun}
        ></SearchBox>
        <CardsList monsters={filteredMonsters}></CardsList>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
