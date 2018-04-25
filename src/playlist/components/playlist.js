import React, { Component } from 'react';
import { render } from 'react-dom';
import Media from './media.js';
import './playlist.css';

class Playlist extends Component {
    render() {
        const playlist = this.props.data.playlist;  
        return (
            <div className='Playlist'>
              {
                playlist.map((item)=>{
                    return <Media {...item} key={item.id}/>
                })
             }
             </div>
        )
    }
}

export default Playlist;