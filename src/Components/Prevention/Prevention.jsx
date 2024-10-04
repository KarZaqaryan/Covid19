import React from 'react';
import {info} from "./prev_info.js";

function Prevention(){
    return (
        <section className="section about" id="about" aria-labelledby="about-label-2">
            <div className="container">

                <figure className="about-banner order-1">
                    <img src={info.img} width="540" height="540" loading="lazy"
                         alt="about banner"
                         className="w-100"/>
                </figure>

                <div className="about-content">

                    <p className="about-subtitle" id="about-label-2">{info.subtitle}</p>

                    <h2 className="h2 section-title">{info.title}</h2>

                    <p className="section-text text">{info.desc}</p>

                    <ul className="about-list">

                        {
                            info.values_img.map((item, index) => (
                                <li key={index} className="about-item">
                                    <figure className="item-img img-holder" style={{width: 80, height: 80}}>
                                        <img src={item} width="80" height="80" loading="lazy"
                                             alt="Wash Your Hands For 20sec"/>
                                    </figure>

                                    <div className="item-content">
                                        <h3 className="h4 item-title">{info.value_title[index]}</h3>


                                        <p className="item-text text">
                                            Our comprehensive Online Marketing strategy will boost your website trafic
                                            hence
                                            monthly sales.
                                        </p>
                                    </div>
                                </li>

                            ))
                        }

                    </ul>

                </div>

            </div>
        </section>
    );
}

export default Prevention;