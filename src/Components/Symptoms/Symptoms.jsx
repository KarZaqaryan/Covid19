import React from 'react';
import {info} from "./symtomps_info";

function Symptoms() {
    return (
        <section className="section service has-bg-image" style={{ backgroundImage: "url('../../Assets/img/service-bg.jpg')" }}
                 aria-labelledby="service-label-1">
            <div className="container">

                <h2 className="h2 section-title" id="service-label-1">{info.title}</h2>

                <p className="section-text text">{info.subTitle}</p>

                <ul className="service-list">

                    {
                        info.images.map((value, index) => (
                            <li key={index}>
                                <div  className="service-card">

                                    <figure className="card-banner img-holder"
                                            style={{width: '110px', height: '110px'}}>
                                                <img  src={value} width="110" height="110"
                                                     loading="lazy"
                                                     alt="service image"/>
                                    </figure>

                                    <div className="card-content">
                                    <h3  className="h4 card-title">{info.values_title[index]}</h3>
                                        <p className="card-text text">{info.value}</p>
                                    </div>

                                </div>
                            </li>
                        ))
                    }

                </ul>

            </div>
        </section>

    );
}

export default Symptoms;