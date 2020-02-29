import React from "react";
import {Link} from "react-router-dom";
import List from "./components/List";
import Header from "./components/Header";

export default function Home(){
    return (
        <div>
            <Header/>
            <main>
                <div className="container">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-8 col-lg-6">
                                <ul className="no-list-style">
                                    <List icon={"fa-hand-peace-o"} text={"Software developer"} />
                                    <List icon={"fa-mobile"} text={"780 882 4742"} />
                                    <List icon={"fa-envelope"} text={"hello [at] colbygarland [dot] ca"} />

                                    <li className="aos-init" data-aos="fade-up" data-aos-delay="750"><i
                                        className="fa fa-linkedin"></i> <a
                                        href="https://www.linkedin.com/in/colbygarland/" target="_blank">LinkedIn</a>
                                    </li>
                                    <li className="aos-init" data-aos="fade-up" data-aos-delay="850"><i
                                        className="fa fa-twitter"></i> <a href="https://twitter.com/xcolbyg/"
                                                                          target="_blank">Twitter</a></li>
                                    <li className="aos-init" data-aos="fade-up" data-aos-delay="900"><i
                                        className="fa fa-spotify"></i> <a
                                        href="https://open.spotify.com/artist/5EvvtCzAShNJicGsRHTsA4/"
                                        target="_blank">Spotify</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-lg-6">
                                <p className="aos-init" data-aos="fade-up" data-aos-delay="900">View my work <Link to="/work">here.</Link></p>
                                <p className="aos-init" data-aos="fade-up" data-aos-delay="1000">Let's get in touch! I'd
                                    love to work with you.</p>
                                <p className="aos-init" data-aos="fade-up" data-aos-delay="1100">Or are you looking for
                                    my music? <i className="fa fa-music"></i> <br/>Check it out at <a
                                        href="https://colbygarland.ca/music"
                                        target="_blank">colbygarland.ca/music</a> or on Spotify, Apple Music, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
