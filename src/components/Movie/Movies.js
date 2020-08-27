import React, { Component } from 'react';
import Items from '../FilmList'

import MovieService from '../../services/MovieService';

export default class Movies extends Component {

    constructor() {
        super();

        this.state = {
            movies: []
        };
    }
    componentDidMount() {
        this.setState(() => ({ movies: MovieService.getMovies() }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        
                    <Items movies= {this.state.movies} />
        
                    </div>
                </div>
            </div>
          
        );
    }
}