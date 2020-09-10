//header-section div to hold page title
//Import react
import React from 'react';

export default function Header(props) {
    const {photoTitle} = props;

    return (
        <div className = 'header-section'>
            <h2>NASA Daily Photo</h2>
            <h3>{photoTitle}</h3>
        </div>
    )
}