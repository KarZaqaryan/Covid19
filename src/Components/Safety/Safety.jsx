import React from 'react';
import {info} from "./Safety_info.js";

function Safety() {
    return (

        <section className="section safety" aria-labelledby="safety-label">
            <div className="container">

                <h2 className="h2 section-title" id="safety-label">{info.title}</h2>

                <p className="section-text text">
                    {info.subTitle}
                </p>

                <ol className="safety-list">

                    {
                        info.images.map((img,index) => (
                            <li key={index} className="safety-item">
                                <figure className="item-banner img-holder" style={{width: '170px', height: '170px'}}>
                                    <img src={img} width="170" height="170" loading="lazy"
                                         alt="Wet Hands"
                                         className="img"/>
                                </figure>

                                <span className="number">{index}</span>

                                <h3 className="h4 item-title">{info.images_txt[index]}</h3>
                            </li>
                        ))
                    }

                </ol>

            </div>
        </section>
    );
}

export default Safety;