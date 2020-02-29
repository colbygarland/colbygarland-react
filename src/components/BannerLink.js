import React from "react";
import colors from '../styles';
import {Link} from "react-router-dom";

export default function BannerLink(props) {

    let style = {
        wrapper: {
            backgroundColor:colors.primary,
            paddingTop:10,
            paddingBottom: 10
        },
        link: {
            display: "block"
        }
    };

    return (
        <div style={style.wrapper}>
            <Link to={props.to} style={style.link}><i className="fa fa-arrow-left"></i> {props.text}</Link>
        </div>
    );
}
