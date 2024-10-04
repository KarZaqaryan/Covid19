import React from 'react';
import {info} from "./info.js";


const Trecker = () => {
    const divStyle = {
        backgroundImage: "url('../../Assets/Img/hero-bg.jpg')"
    };

    return (
        <section className="section hero has-bg-image" id="home" style={divStyle}>
            <div className="container">
                <div className="hero-content">
                    <h1 className="h1 hero-title">{info.title}</h1>
                    <p className="hero-text">
                        {info.subtitle}
                    </p>
                    <data className="counter" value="960708">{info.all_Cases}</data>
                    <ul className="hero-list">
                        <li className="hero-list-item yellow">
                            Active cases <span className="span">{info.active_cases}</span>
                        </li>
                        <li className="hero-list-item green">
                            Recovered cases <span className="span">{info.recover_cases}</span>
                        </li>
                        <li className="hero-list-item red">
                            Deaths <span className="span">{info.deaths}</span>
                        </li>
                    </ul>
                    <a href="#" className="btn btn-primary">Meet The Doctor</a>
                </div>
                <figure className="hero-banner">
                    <img src={info.img} width="570" height="562" alt="corona virus" className="w-100"/>
                </figure>
            </div>
        </section>
    );
};

export default Trecker;
