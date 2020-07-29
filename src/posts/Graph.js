import React, { Component } from 'react';
import '../App'
import {Bar} from 'react-chartjs-2';
import ListenerData from '../data/sorted.json';

var artistList=[];
var listenersList=[];

//Puts artistName and artistListeners into artistList & listenersList arrays
for (var i = 0; i < ListenerData.artists.length; i++) {    
    for (var artist in ListenerData.artists[i]) {                    
        if (ListenerData.artists[i].hasOwnProperty('artist')) { 
            console.log(typeof artist)	
            if(artist === "artist"){
                artistList.push(ListenerData.artists[i][artist]) 
            }    
            if(artist === "monthlylisteners"){
                listenersList.push(ListenerData.artists[i][artist]) 
            }                
        }              
    }             
}


const state = {
    labels: artistList,
    datasets: [
      {
        label: 'Listeners',
        backgroundColor: '#1DB954',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: listenersList
      }
    ]
  }


class Graph extends Component {
    render(){
        return (
            <div>
              <Bar
                data={state}
                options={{
                  title:{
                    display:true,
                    text:'Artist Monthly Listeners',
                    fontSize:20,
                    fontColor: "white"
                  },
                  legend:{
                    display:true,
                    position:'right',
                    fontColor: "white"
                  }
                }}
              />
            </div>
          );
    }
}

export default Graph;