import React, { Component } from 'react';
import ListenerData from '../data/sorted.json';

const rowStyles ={
    display: 'flex', 
    justifyContent: 'space-between', 
    width: '70%',
    alignItems: 'center',
    borderTop: '1px solid #393939' 
 };

class ArtistsList extends Component {
    render(){
        return (
            <div id="artistRowWrapper" style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/*Need ot fix title styling*/}
                <div id = "artistHeaders" style={rowStyles}>
                    <p style ={{color: '#1DB954'}}>Artist</p>
                    <p style ={{color: '#1DB954'}}>Monthly Listeners</p>
                </div>

                {/*Iterate through all json data*/}
                {ListenerData.artists.slice(0, 50).map((listenerDetail)=>{
                    return <div id = "artistRow" style={rowStyles}>
                        <a href={listenerDetail.url} style ={{color: 'white', textDecoration:'none'}}>1. {listenerDetail.artist}</a>
                        <p style ={{color: 'white'}}>{listenerDetail.monthlylisteners}</p> 
                    </div>   
                })} 
            </div>    
        );
    } 
}   

export default ArtistsList;
