import React from 'react';
import './albumrow.css';

 export const AlbumRow = ({ album }) => (
    <div className="albumRow">
        <img className="albumRow-image" src={album.images[0].url} alt="" />
        <div className="albumRow-title">
            <h5>{album.name}</h5>
        </div>
    </div>
);

export const CategoriesRow = ({ category }) => (
    <div className="albumRow">
        <img className="albumRow-image" src={category.icons[0].url} alt="" />
        <div className="albumRow-title">
            <h5>{category.name}</h5>
        </div>
    </div>
);
