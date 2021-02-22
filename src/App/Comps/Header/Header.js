import React, { useState } from 'react';
import '../../styles/themes.css';
import './header.css';
import { faMoon, faSun, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDataLayerValue } from '../DataLayer';
import { AlbumRow, CategoriesRow } from '../AlbumRow';

function scrollContainer(id, { isNegative } = {}) {
    return () => {
      const scrollableContainer = document.getElementById(id);
      const amount = isNegative ? -scrollableContainer.offsetWidth : scrollableContainer.offsetWidth;
  
      scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
    };
}

function Header() {

    const [{ new_releases, playlists, categories }, dispatch] = useDataLayerValue();
    const [theme, setTheme] = useState('light');
    
    return (
        <div className={`header ${theme}`}>
            <div className="header-static">
                <img />
                <div className="header-text">
                    <h1>Your favourite tunes</h1>
                    <h2>All <FontAwesomeIcon className="sun-icon" icon={faSun} onClick={() => setTheme('light')} /> and all <FontAwesomeIcon className="moon-icon" icon={faMoon} onClick={() => setTheme('dark')} />
                    </h2>
                </div>
            </div>

            <div className="header-content">

                <div className="header-title-scroll">
                    <h4>RELEASED THIS WEEK</h4>
                    {new_releases?.albums?.items?.length ? (
                        <div className="scroll">
                            <FontAwesomeIcon icon={faAngleLeft} onClick={scrollContainer('released-week', { isNegative: true })} />
                            <FontAwesomeIcon icon={faAngleRight} onClick={scrollContainer('released-week')} />
                        </div>
                    ) : null }
                </div>
                <div className="header-content-shower" id="released-week">
                    {new_releases?.albums?.items?.map(album => (
                        <AlbumRow album={album}/>
                    ))};
                </div>

                <div className="header-title-scroll">
                    <h4>FEATURED PLAYLIST</h4>
                    {playlists?.playlists?.items?.length ? (
                        <div className="scroll">
                            <FontAwesomeIcon icon={faAngleLeft} onClick={scrollContainer('featured-playlists', { isNegative: true })} />
                            <FontAwesomeIcon icon={faAngleRight} onClick={scrollContainer('featured-playlists')} />
                        </div>
                    ) : null }
                </div>
                <div className="header-content-shower" id="featured-playlists">
                    {playlists?.playlists?.items?.map(album => (
                        <AlbumRow album={album}/>
                    ))};
                </div>

                <div className="header-title-scroll">
                    <h4>BROWSE</h4>
                    {categories?.categories?.items?.length ? (
                        <div className="scroll">
                            <FontAwesomeIcon icon={faAngleLeft} onClick={scrollContainer('browse', { isNegative: true })} />
                            <FontAwesomeIcon icon={faAngleRight} onClick={scrollContainer('browse')} />
                        </div>
                    ) : null }
                </div>
                <div className="header-content-shower" id="browse">
                    {categories?.categories?.items?.map(category => (
                        <CategoriesRow category={category}/>
                    ))};
                </div>

            </div>
            
            
        </div>
    );
}

export default Header;