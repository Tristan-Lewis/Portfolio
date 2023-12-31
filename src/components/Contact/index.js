import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass] = useState('text-animate');
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_w9a5kux',
                'template_s5aailn',
                refForm.current,
                '4OxhpOh14-2loRM8a'
            ).then(() => {
                alert('Message sent successfully!')
                window.location.reload(false)
            },
                () => {
                    alert('Something went wrong. Please try again!')
                }
            )

    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15} />
                    </h1>
                    <p>Feel free to reach out to me if you're interested in working together or have any questions!</p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='example@example.com' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Type message here' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Tristan Lewis-Jubenville<br/>
                    (585) 314-3944
                    <br />
                    Rochester, NY<br />
                    <span>tristanlewisdev@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[43.24877, -77.64095]} zoom={12}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[43.24877, -77.64095]}>
                            <Popup></Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='ball-scale-ripple-multiple' />
        </>
    )
}

export default Contact