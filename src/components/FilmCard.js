import React, { Component } from "react";
//import ReactPaginate from "react-paginate;


class Item extends Component {





  render() {
    return (
      
     // <React.Fragment>
     //<p> Likes: {this.props.item.likes} </p>
      //          <p> Dislikes: {this.props.item.dislikes} </p>
     //this.props.item.imageUrl
         <div className="movie-card" >         
        <div className="movie-card card">
            <img className="card-img-top" src={this.props.item.imageUrl} alt="" />
            <div className="card-body">
                <h4 className="card-title">{this.props.item.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{this.props.item.category}</h6>
                

                <button onClick={() => this.props.likeMe(this.props.item.id)}>👍 : {this.props.item.likes}</button> &nbsp;
                <button onClick={() => this.props.dislikeMe(this.props.item.id)}>👎 : {this.props.item.dislikes}</button>
                <button 
              onClick={() => this.props.onDelete(this.props.item.id)}
              className="btn btn-lg btn-outline-danger ml-4"
            >
              Delete
            </button> 
           
            </div>            
        </div>
            
          </div>

         
    );
  }
 
  
}
 
export default Item;