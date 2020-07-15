import React, { Component } from 'react';
import '../App'
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render(){
        return (
            <React.Fragment>
                <h1 id="title" style ={{color: 'white'}}>Top Artists on Spotify</h1>
                <div id = "navbar" style={{display: 'inline-flex'}}>
                    <Link to ='/'>
                        <h2 style ={{color: '#1DB954', margin:'20px', textDecoration: "none"}}>Rankings</h2>
                    </Link>
                    <Link to = '/graph'>
                        <h2 style ={{color: '1DB954'}}>Graph</h2>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default NavBar;
