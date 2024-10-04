import React from 'react';
import Header from "../Header/Header.jsx";
import Trecker from "../Tracker/trecker.jsx";
import About from "../About/About.jsx";
import Symptoms from "../Symptoms/Symptoms.jsx";
import Prevention from "../Prevention/Prevention.jsx";
import Doctors from "../Doctors/Doctors";
import Safety from "../Safety/Safety.jsx";
import Blog from "../Blog/Blog.jsx";

export default function Main (){
    return(
        <div>

            <Header/>
            <main>
                <Trecker/>
                <About/>
                <Symptoms/>
                <Prevention/>
                <Doctors/>
                <Safety/>
                <Blog/>
            </main>
        </div>
    )
}