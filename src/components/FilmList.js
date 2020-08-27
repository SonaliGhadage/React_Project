import React, { Component } from "react";
import Item from "./FilmCard";
import Select from "react-dropdown-select";
import MovieService from '../services/MovieService'; 

class Items extends Component {

   
  state = {
    items: []
  };

  componentDidMount() {
    this.setState(() => ({ items: MovieService.getMovies() }));
}

  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: items });
  };
 
  likeMe = (itemId) => {
    const index = this.state.items.findIndex(item => item.id === itemId);
    if (index === -1) {
        // handle error
    } else {
        this.setState({
          items: [
                ...this.state.items.slice(0, index),
                Object.assign({}, this.state.items[index], { likes: this.state.items[index].likes + 1 }),
                ...this.state.items.slice(index + 1)
            ]
        });
    }
}
dislikeMe = (itemId) => {
    const index = this.state.items.findIndex(item => item.id === itemId);
    if (index === -1) {
        // handle error
    } else {
        this.setState({
          items: [
                ...this.state.items.slice(0, index),
                Object.assign({}, this.state.items[index], { dislikes: this.state.items[index].dislikes + 1 }),
                ...this.state.items.slice(index + 1)
            ]
        });
    }
}

handleChange = (items) => {
  this.setState({ items: items.category });
}

  render() {
    return (
      <React.Fragment>
       
        <Select
            isMulti
            isSearchable
            placeholder={"Select"}
            value={this.state}
            onChange={this.handleChange}
            items={this.state.items.map(item =>(<Item key={item.id} label={item.category}/>))}/>
            
            <div className="card-deck">

        {this.state.items.map(item => (
          <Item
            key={item.id}
            onDelete={this.handleDelete.bind(this)}
            likeMe={this.likeMe.bind(this)} 
            dislikeMe={this.dislikeMe.bind(this)}
            item={item}
            
          />
        ))}
                </div >

      </React.Fragment>
    );
  }
}
 
export default Items;