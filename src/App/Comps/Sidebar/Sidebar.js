import React from 'react';
import './sidebar.css';
import SidebarOption from './SidebarOption';
import { faHeadphonesAlt, faSearch, faHeart, faPlayCircle, faStream} from '@fortawesome/free-solid-svg-icons';
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {

    const [{user}, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <div className="sidebar-profile">
                <img className="sidebar-profile-image" src={user?.images[0]?.url} alt="" />
                <p>{user?.display_name}</p>
            </div>
            <SidebarOption Icon={faHeadphonesAlt} title="Discover" />
            <SidebarOption Icon={faSearch} title="Search" />
            <SidebarOption Icon={faHeart} title="Favourites" />
            <SidebarOption Icon={faPlayCircle} title="Playlists" />
            <SidebarOption Icon={faStream} title="Charts" />
        </div>

    );
}

export default Sidebar;