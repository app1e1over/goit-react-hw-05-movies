import React from "react";
import "./style.css";
import PropTypes from 'prop-types'
import Stats from "components/Stats/Stats";

function Profile(props){
    const {avatar, username, tag, location, stats } = props;
    console.log("hi");
    return (
        
        <div className="profile">
            <img src={avatar} alt="avatar" className="avatar"/>
            <div className="info">
                <p className="highlighted-text">{username}</p>
                <p className="bleak-text">{"@"+tag}</p>
                <p className="bleak-text">{location}</p>
            </div>
            <Stats obj={stats}></Stats>
        </div>
        )
}

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object    
  }
export default Profile;