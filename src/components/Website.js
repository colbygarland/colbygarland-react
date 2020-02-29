import React from "react";

export default function Website(props){
    return (
        <div className="col-sm-6 aos-init" data-aos="fade-up">
            <img src={props.image} alt={props.title}/>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <p><a href={props.url} target="_blank" className="btn btn-primary"><i
                className="fa fa-link"></i> View Website</a></p>
        </div>
    );
}
