import React, { Component } from 'react';
import { FILMS } from '../shared/films';
import { Media } from 'reactstrap';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            films: FILMS,
            chosen: [],
            started: false
        }
        this.find = this.find.bind(this);
    }

    find(chosen) {
        this.setState({started: true, chosen: chosen});
    }

    render() {
        if(this.state.started) {
            if(this.state.chosen.choices){
                const buttons = this.state.chosen.choices.map(choice => {
                    return (
                        <div className="button-div">
                            <button className='button' onClick={() => this.find(choice)}>
                                {choice.name}
                            </button>
                        </div>
                    )
                });
                return (
                    <div>
                        <h1>{this.state.chosen.name}</h1>
                        {buttons}
                    </div>
                );
            }
            else{
                return (
                    <div>
                        <h3>You should watch...</h3>
                        <h1>{this.state.chosen.title}</h1>
                        <a href={this.state.chosen.url} target="_blank" rel="noreferrer">
                            <Media className="recommendation" object src={this.state.chosen.image}/>
                        </a>
                    </div>
                )
            }
        }
        return (
            <div>
                <h1 className='search'>Do you want to watch a movie or a tv show?</h1>
                <div className="button-div">
                    <button className='button' onClick={() => this.find(this.state.films[0])}>
                        Movie
                    </button>
                </div>
                <div className="button-div">
                    <button className='button' onClick={() => this.find(this.state.films[1])}>
                        TV Show
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;