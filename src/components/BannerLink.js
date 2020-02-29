import React from "react";
import {Link} from "react-router-dom";

export default function BannerLink(props) {

    let style = {
        wrapper: {
            paddingTop:10,
            paddingBottom: 10,
            paddingLeft: 20
        },
        link: {
            display: "block",
            border: "none"
        }
    };

    return (
        <div style={style.wrapper} className="banner-link">
            <Link to={props.to} style={style.link}><i className="fa fa-arrow-left"></i> {props.text}</Link>
        </div>
    );
}
