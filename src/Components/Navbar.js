import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex',padding:'0.5', backgroundColor:'#072227'}}>
                <Link to="/" style={{textDecoration:'none'}}><h1 style={{marginTop:'1rem',marginLeft:'1rem', color:'#35858B'}}>MyMovies</h1></Link>
                <Link to="/favourites" style={{textDecoration:'none'}}><h2 style={{marginLeft:'4rem',marginTop:'1.6rem',color:'#35858B'}}>Favourites</h2></Link>
                
                
            </div>
        )
    }
}