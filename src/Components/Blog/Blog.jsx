import React from 'react';
import {info} from "./blog_info.js";

function Blog () {
    return (
        <section className="section blog" id="blog" aria-labelledby="blog-lable">
            <div className="container">

                <h2 className="h2 section-title" id="blog-label">{info.title}</h2>

                <p className="section-text text"> {info.subtitle}  </p>

                <ul className="grid-list">

                    {
                        info.images.map((img,i) => (
                            <li key={i}>
                                <div className="blog-card">

                                    <figure className="card-banner img-holder"
                                            style={{width: '370px', height: '280px'}}>
                                        <img src={img} width="370" height="280" loading="lazy"
                                             alt="Conulting Reporting Qouncil Arei Not Could More..."
                                             className="img-cover"/>
                                    </figure>

                                    <div className="card-content">

                                        <h3 className="h4">
                                            <a href="#" className="card-title">
                                                Conulting Reporting Qouncil Arei Not Could More...
                                            </a>
                                        </h3>

                                        <div className="card-meta">

                                            <div className="wrapper">
                                                <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                                                <time className="meta-text" dateTime="2022-07-12">July 12, 2022</time>
                                            </div>

                                            <div className="wrapper">
                                                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                                                <p className="meta-text">John Doe</p>
                                            </div>

                                        </div>

                                        <p className="card-text text">
                                            Pluoresntly customize pranci an plcentered customer service anding strategic
                                            amerials Interacvely
                                            cordinate performe
                                        </p>

                                    </div>

                                    <div className="card-footer">
                                        <a href="#" className="btn-link">Read More</a>
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

export default Blog;