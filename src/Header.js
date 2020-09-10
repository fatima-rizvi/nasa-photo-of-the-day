//header-section div to hold page title
//Import react
import React from 'react';

export default function Header(props) {
    const {photoTitle} = props;

    return (
        <div className = 'header-section'>
            <h1>NASA Photo of the Day</h1>
            <h2>{photoTitle}</h2>
        </div>
    )
}