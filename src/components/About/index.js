import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass] = useState('text-animate');

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15} />
                    </h1>
                    <p>As a web developer with a knack for creativity, I thoroughly enjoy developing appealing, user-friendly web solutions</p>
                    <p>Although I excell working with client-side technologies, I have a well rounded skillset with experience in design and server-side technologies as well!</p>
                    <p>My unique background in management provides me with invaluable skills such as time management, organization, and effective communication just to name a few.</p>
                </div>
            </div>
            <Loader type='ball-scale-ripple-multiple'/>
        </>
    )
}

export default About