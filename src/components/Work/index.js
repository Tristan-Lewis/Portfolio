import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Image1 from '../../assets/images/myflixclient.png'
import Image2 from '../../assets/images/myflixapi.png'
import Image3 from '../../assets/images/connect.png'
import Image4 from '../../assets/images/chatty.png'
import Image5 from '../../assets/images/pokedex.png'
import Image6 from '../../assets/images/portfolio.png'

const Work = () => {
    const [letterClass] = useState('text-animate');

    return (
        <>
            <div className='about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']}
                            idx={15} />
                    </h1>
                </div>
            </div>
            <div className="project-container">
                <div className="project">
                    <img src={Image1} alt='project 1' />
                    <p>MYFLIX CLIENT <br /><span className="subtext">React project</span></p>
                    <div className='flex-buttons'>
                        <Link to='https://github.com/Tristan-Lewis/myFlix-Client-side' target="_blank" className='flat-button'>SEE THE CODE</Link>
                        <Link to='https://myflixreactapp.netlify.app/login' target="_blank" className='flat-button'>TRY IT OUT</Link>
                    </div>
                </div>
                <div className="project">
                    <img src={Image3} alt='project 3' />
                    <p>CONNECT <br /><span className="subtext">React project</span></p>
                    <div className='flex-buttons'>
                        <Link to='https://github.com/Tristan-Lewis/Connect' target="_blank" className='flat-button'>SEE THE CODE</Link>
                        <Link to='https://tristan-lewis.github.io/Connect/' target="_blank" className='flat-button'>TRY IT OUT</Link>
                    </div>
                </div>
                <div className="project">
                    <img src={Image5} alt='project 5' />
                    <p>POKEDEX <br /><span className="subtext">JavaScript project</span></p>
                    <div className='flex-buttons'>
                        <Link to='https://github.com/Tristan-Lewis/Pokedex/' target="_blank" className='flat-button'>SEE THE CODE</Link>
                        <Link to='https://tristan-lewis.github.io/Pokedex/' target="_blank" className='flat-button'>TRY IT OUT</Link>
                    </div>
                </div>
                <div className="project">
                    <img src={Image2} alt='project 2' />
                    <p>MYFLIX API <br /><span className="subtext">Backend project</span></p>
                    <div className='flex-buttons'>
                        <Link href='https://github.com/Tristan-Lewis/myFlix-API/' target="_blank" className='flat-button'>SEE THE CODE</Link>
                    </div>
                </div>
                <div className="project">
                    <img src={Image4} alt='project 4' />
                    <p>CHATTY <br /><span className="subtext">React Native project</span></p>
                    <div className='flex-buttons'>
                        <Link to='https://github.com/Tristan-Lewis/Chatty' target="_blank" className='flat-button'>SEE THE CODE</Link>
                    </div>
                </div>
                <div className="project">
                    <img src={Image6} alt='project 6' />
                    <p>PORTFOLIO <br /><span className="subtext">React project</span></p>
                    <div className='flex-buttons'>
                        <Link to='https://github.com/Tristan-Lewis/Portfolio' target="_blank" className='flat-button'>SEE THE CODE</Link>
                    </div>
                </div>
            </div>

            <Loader type='ball-scale-ripple-multiple' />
        </>
    )
}

export default Work