import React, { Component } from 'react';
import Playlist from './playlist';
import { render } from 'react-dom';

class Category extends Component{
    render(){
        const categories = this.props.data.categories;  
        return(
            <div className='category'>
            {
                categories.map((item)=>{
                    return <Playlist data={item} key={item.id}/>
                })
            }
            </div>
        )
    }
}

export default Category;