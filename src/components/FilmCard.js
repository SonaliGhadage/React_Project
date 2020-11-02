import React, { Component } from "react";

class Item extends Component {

  render() {

    return (
      
       <div className="movie-card" >  
       
        <div className="movie-card card">
        <img className="card-img-top" src={process.env.PUBLIC_URL+this.props.item.imageUrl} alt=""/>

            <div className="card-body">
                <h4 className="card-title">{this.props.item.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{this.props.item.category}</h6>
                
                <button role="img" onClick={() => this.props.likeMe(this.props.item.id)}>👍 : {this.props.item.likes}</button> &nbsp;
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