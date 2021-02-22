import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faPlayCircle, faStepForward, faEllipsisH, faHeart, faRandom, faRetweet, faVolumeDown } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="footer-album-logo" />
                <div className="footer-song-info">
                    <h4>Nothing's Playing</h4>
                </div>
            </div>
            <div className="footer-center">
                <FontAwesomeIcon className="step-backward-icon" icon={faStepBackward} />
                <FontAwesomeIcon className="play-circle-icon" icon={faPlayCircle} />
                <FontAwesomeIcon className="step-forward-icon" icon={faStepForward} />
            </div>
            <div className="footer-right">
                <FontAwesomeIcon className="ellipsis-icon" icon={faEllipsisH} />
                <FontAwesomeIcon className="heart-icon" icon={faHeart} />
                <FontAwesomeIcon className="random-icon" icon={faRandom} />
                <FontAwesomeIcon className="retweet-icon" icon={faRetweet} />
                <FontAwesomeIcon className="volume-icon" icon={faVolumeDown} />
            </div>
        </div>
    );
}

export default Footer;