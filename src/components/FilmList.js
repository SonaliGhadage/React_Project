import React, { Component } from "react";
import Item from "./FilmCard";
import MovieService from '../services/MovieService'; 

import Pagination from "./Pagination";

class Items extends Component {

   
  state = {
    items: [],
    pageOfItems: []
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

handleChange = event => {
 this.setState({ movie: event.target.value });
}

onChangePage(pageOfItems) {
  // update state with new page of items
  this.setState({ pageOfItems: pageOfItems });
  }



getUnique(arr, comp) {

  // store the comparison  values in array
const unique =  arr.map(e => e[comp])

// store the indexes of the unique objects
.map((e, i, final) => final.indexOf(e) === i && i)

// eliminate the false indexes & return unique objects
.filter((e) => arr[e]).map(e => arr[e]);

return unique;
}


  render() {

    const uniqueCategory = this.getUnique(this.state.items, "category")

    const items = this.state.pageOfItems
    const movie = this.state.movie

    const filterDropdown = items.filter(function(item){
         return( !movie || item.category === movie )
      });
    

    return (
      <div>

            <div className="drop-down">

                    <p><b>Select movie by category</b></p>
                    <select value={movie} onChange={this.handleChange} >
                    <option value="">Select</option>
                    {
                        uniqueCategory.map(movie => 
                        <option key={movie.id} value={movie.category}>{movie.category} </option>)
                    }
                    </select>  

              </div>

                    <div className="card-deck">               
                        
        {filterDropdown.map( item => (
          
          <Item
            key={item.id}
            onDelete={this.handleDelete.bind(this)}
            likeMe={this.likeMe.bind(this)} 
            dislikeMe={this.dislikeMe.bind(this)}
            value={item.imageUrl}
            item={item}
            
          />
          
        ))}
                </div >

                <div>
  <Pagination items={this.state.items} onChangePage={this.onChangePage.bind(this)} />

  </div>


</div>



    );
  }
}
 
export default Items;