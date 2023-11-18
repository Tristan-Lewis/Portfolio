import { Link } from "react-router-dom";
import './index.scss';
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import Image from '../../assets/images/rochester-skyline2.png'


const Home = () => {
    const [letterClass] = useState('text-animate');
    const nameArray = ['', 'T', 'r', 'i', 's', 't', 'a', 'n', ' ', 'L', 'e', 'w', 'i', 's'];
    const jobArray = ['A', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>I'm</span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21} />
                    </h1>
                    <h2>Frontend Developer | Animal Lover | Gamer </h2>
                    <div className='flex-buttons'>
                        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                        <Link to='/work' className='flat-button'>SEE MY WORK</Link>
                    </div>
                </div>
            </div>
            <img src={Image} alt='rochester, new york skyline' />
            <Loader type='ball-scale-ripple-multiple' />
        </>
    )
}

export default Home