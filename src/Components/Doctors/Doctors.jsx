import React from 'react';
import {info} from "./doc_info.js";


const Doctors = () => {
    return (
        <section
            className="section doctor"
            style={{ backgroundImage: "url('../covid-19/src/Assets/Img/service-bg.jpg')" }}
            aria-labelledby="doctor-label"
        >
            <div className="container">
                <h2 className="h2 section-title" id="doctor-label">{info.title}</h2>

                <p className="section-text text">
                    {info.subtitle}
                </p>

                <ul className="grid-list">

                    {
                        info.images.map((item, index) => (
                            <li key={index}>
                                <div className="doctor-card">
                                    <figure className="card-banner img-holder"
                                            style={{width: '350px', height: '360px'}}>
                                        <img
                                            src={item}
                                            width="350"
                                            height="360"
                                            loading="lazy"
                                            alt="Dorothy M. Nickell profile"
                                            className="img-cover"
                                        />
                                    </figure>

                                    <div className="card-content">
                                        <h3 className="h4 card-title">{info.values_names[index]}</h3>
                                        <p className="card-subtitle">{info.values_inf[index]}</p>
                                        <p className="card-text text">
                                            {info.values_desc}
                                        </p>

                                        <ul className="card-list">
                                            <li className="card-item">
                                                <div className="icon-box">
                                                    <ion-icon name="call" aria-hidden="true"></ion-icon>
                                                </div>
                                                <span className="span">+502 1234 567 890</span>
                                            </li>
                                            <li className="card-item">
                                                <div className="icon-box">
                                                    <ion-icon name="mail" aria-hidden="true"></ion-icon>
                                                </div>
                                                <span className="span">{info.values_mails[index]}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </section>
    );
};

export default Doctors;
