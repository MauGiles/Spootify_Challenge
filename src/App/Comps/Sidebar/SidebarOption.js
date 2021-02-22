import React from 'react';
import './sidebaroption.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SidebarOption({ title, Icon }) {
    return (
        <div className="sidebarOption">
            {Icon && <FontAwesomeIcon className="sidebarOption-icon" icon={Icon} />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p> }
        </div>
    );
}

export default SidebarOption;