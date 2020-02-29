import React from "react";
import {Link} from "react-router-dom";
import pureflow from './img/websites/pureflow.png';
import misty_mountain from './img/websites/misty-mountain.jpg';
import fource from './img/websites/fource.jpg';
import assure from './img/websites/assure.jpg';
import cedar_peak from './img/websites/cedar-peak.jpg';
import ghost from './img/websites/ghost-production.jpg';
import webananas from './img/websites/webananas.jpg';
import psl from './img/websites/psl.png';
import westretch from './img/websites/westretch.png';
import Header from "./components/Header";
import BannerLink from "./components/BannerLink";
import Website from "./components/Website";
import List from "./components/List";

export default function Work(){
    return (
        <div>
            <BannerLink to={'./'} text={'go back'} icon={'fa-arrow-left'}/>
            <Header/>

            <main>

                <div className="content">
                    <div className="container">
                        <h3 className="aos-init" data-aos="fade-up" data-aos-delay="300">I Build Websites.</h3>
                        <p className="aos-init" data-aos="fade-up" data-aos-delay="350">I build custom mobile-friendly
                            websites tailored to your needs. Have a previous design? <strong>No problem.</strong> Want
                            to be able to make updates to it yourself? <strong>Giddy up.</strong> Whether it's a single
                            page site, or a multi-page update-yourself-er, I'm down to help you achieve your vision.</p>
                    </div>
                </div>

                <div className="content white-bg aos-init" data-aos="fade-up" data-aos-delay="425">
                    <div className="container">
                        <h3 className="aos-init" data-aos="fade-up" data-aos-delay="450">View My Work.</h3>
                        <div className="row websites">
                            <Website
                                title="Pureflow Calibration"
                                description="Pureflow Calibration is an instrumentation supply and calibration house."
                                image={pureflow}
                                url="https://pureflowgp.ca"
                            />
                            <Website
                                title="Misty Mountain Images"
                                description="Rebecca needed a nice, clean website that she could update herself."
                                image={misty_mountain}
                                url="http://mistymountainimages.ca"
                            />
                            <Website
                                title="Fource by Teleo Inc"
                                description="Fource, a program by Teleo Inc., was a website showcasing the Fource software Teleo developed."
                                image={fource}
                                url="https://fource.teleoinc.com/"
                            />
                            <Website
                                title="Assure Energy Services"
                                description="Assure wanted a no-nonsense website, with easy to view services and quick to view information."
                                image={assure}
                                url="https://assureenergy.ca"
                            />
                            <Website
                                title="Cedar Peak Design"
                                description="Cedar Peak is a picture framing company that specializes in making that perfect memento for your family."
                                image={cedar_peak}
                                url="https://cedarpeak.ca"
                            />
                            <Website
                                title="Ghost Production Services"
                                description="With a wide variety of oilfield services, Ghost needed a simple website to showcase their suite of services available."
                                image={ghost}
                                url="https://ghostproduction.ca"
                            />
                            <Website
                                title="We Bananas Software Inc"
                                description="We Bananas is an app development agency based out of Grande Prairie. This was also my first completely React site."
                                image={webananas}
                                url="https://webananas.ca/"
                            />
                            <Website
                                title="Pumpkin Spice Latte"
                                description="I may have a slight addiction to PSL's. I built a site showcasing my problem."
                                image={psl}
                                url="https://psl.colbygarland.ca/"
                            />
                            <Website
                                title="WeStretch: The Stretching App"
                                description="The use of artificial intelligence to generate custom stretching routines unique to you...every time."
                                image={westretch}
                                url="https://westretch.ca"
                            />
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="container">
                        <h3>Like What You See?</h3>
                        <p>Great. Let's get in touch! I'd love to work with you. If not, <strong>that's a
                            shame.</strong></p>
                        <ul className="no-list-style">
                            <List icon="fa-mobile" text="780 882 4742"/>
                            <List icon="fa-envelope" text="hello [at] colbygarland [dot] ca"/>
                            <li><i className="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/colbygarland/"
                                                                      target="_blank">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

            </main>
            <footer></footer>
        </div>
    );
}
