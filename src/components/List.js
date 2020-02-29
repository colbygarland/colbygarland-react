import React from 'react';

export default function List(props){

    let className = 'fa ' + props.icon;

    return (
        <li className="aos-init" data-aos="fade-up" data-aos-delay="400">
            <i className={className}></i> {props.text}
        </li>
    );
}
