import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to What To Watch!</h1>
                <h2>Click the button below to begin searching for a recommendation</h2>
                <Link to='/search'>
                    <button className='button'>
                        Begin Search
                    </button>
                </Link>
            </div>
        );
    }
}

export default Home;