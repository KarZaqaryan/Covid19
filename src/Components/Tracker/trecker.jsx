import React, { useEffect, useState } from 'react';
import { info } from './info.js';
import Blog from '../Blog/Blog';

const Trecker = () => {
    const [state, setState] = useState(null);
    const [inp, setInp] = useState('');
    const [province, setProvince] = useState('');

    const divStyle = {
        backgroundImage: "url('../../Assets/Img/hero-bg.jpg')"
    };

    function handleChange(e) {
        setInp(e.target.value);
        setProvince('');
    }

    function handleProvince(e) {
        setProvince(e.target.value);
    }

    useEffect(() => {
        if (inp) {
            fetch(`https://covid-api.com/api/provinces/${inp}`)
                .then((res) => res.json())
                .then((data) => {
                    setState(data.data);
                    console.log(data.data);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [inp]);

    return (
        <section className="section hero has-bg-image" id="home" style={divStyle}>
            <div className="container">
                <div className="hero-content">
                    <div>
                        <label>Select a country: </label>
                        <select value={inp} onChange={handleChange}>
                            <option value="">--Choose a country--</option>
                            <option value="chn">China</option>
                            <option value="usa">USA</option>
                            <option value="rus">Russia</option>
                        </select>
                    </div>


                    <label>Select a Province:</label>
                    <select value={province} onChange={handleProvince} disabled={!state}>
                        <option value="">--Choose a province--</option>
                        {
                            state?.map((res, index) => (
                                <option key={index} value={res.province}>{res.province}</option>
                            ))
                        }
                    </select>

                    {province && state ? (
                        state.filter(res => res.province === province).map((res, index) => (
                            <div key={index}>
                                <h1 className="h1 hero-title">{res.iso}</h1>
                                <p className="hero-text">{res.name}</p>
                                <data className="counter" value="960708">{info.all_Cases}</data>
                                <ul className="hero-list">
                                    <li className="hero-list-item yellow">
                                        Active cases <span className="span">{res.lat || 'N/A'}</span>
                                    </li>
                                    <li className="hero-list-item green">
                                        Recovered cases <span className="span">{res.long || 'N/A'}</span>
                                    </li>
                                    <li className="hero-list-item red">
                                        Deaths <span className="span">{res.deaths || 'N/A'}</span>
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-primary">Meet The Doctor</a>
                            </div>
                        ))
                    ) : (
                        <p>No data available. Please select a country and province.</p>
                    )}
                </div>
                <figure className="hero-banner">
                    <img src={info.img} width="570" height="562" alt="corona virus" className="w-100"/>
                </figure>
            </div>
        </section>
    );
};

export default Trecker;
