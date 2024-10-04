import React, {useEffect, useState} from 'react';
import {info} from "./About-info.js";

function  About(){
    const [state,setState] = useState(null)

    useEffect(() => {
        new Promise(resolve => setTimeout(()=>{
            resolve(info)
        }, 1000)).then((res)=>{
            setState(res)
        })
    }, []);
    if(!state){
        return <h2>Loading...</h2>
    }
    return (
        <section className="section about" id="about" aria-labelledby="about-label-1">
            <div className="container">

                <figure className="about-banner">
                    <img src={state.img} width="540" height="540" loading="lazy" alt="about banner"
                         className="w-100"/>
                </figure>

                <div className="about-content">

                    <p className="about-subtitle" id="about-label-1">{state.subTitle}</p>

                    <h2 className="h2 section-title">{state.title}</h2>

                    <p className="section-text text">
                        {state.desc}
                    </p>

                    <ul className="about-list">

                        {
                            state.value_img?.map((item, index) => (
                                <li key={index} className="about-item">
                                    <figure className="item-img img-holder" style={{width: 80, height: 80}}>
                                        <img src={item} width="540" height="540" loading="lazy" alt="about banner" className="w-100"/>
                                    </figure>

                                    <div className="item-content">
                                        <h3 className="h4 item-title">{state.values_titles[index]}</h3>

                                        <p className="item-text text">{state.Values}</p>
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

export default About;