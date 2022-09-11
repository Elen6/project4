import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    }
  }
  updateInput(key, value) {
    // update React state
    this.setState({
      [key]: value
    })


  }
  
  addItem() {
    // create item with uniqe id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy of current list of items
    const list = [...this.state.list];
    // add new item to list
    list.push(newItem);
    // update state with new list and reset newItem input
    this.setState({
      list,
      newItem: ""
    });
  }
  deleteItem(id) {
    // copy  current list of items
    const list = [...this.state.list];
    // filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="App">
        <div>
          Add an Item...
          <br />
          <input 
            type="text"
            // placeholder="type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            onClick={(e) => this.addItem()}> Add
          </button>



          <br />



          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    onClick={(evt) => this.deleteItem(item.id)}
                  >
                    x
                  </button>
                </li>
              )
            }
            )


            }
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
