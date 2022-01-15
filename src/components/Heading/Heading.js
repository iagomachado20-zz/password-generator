import React from 'react';
import './Heading.css';

export function HeadingComponent({ title, description }) {

    return (
        <header class="heading">
            <h1 class="heading__title">{ title }</h1>
            <h3 class="heading__description">{ description }</h3>
        </header>
    )

}