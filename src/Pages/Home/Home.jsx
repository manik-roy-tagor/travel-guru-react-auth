import React from 'react';
import Rectangle1 from '../../../public/Rectangle1.png';
import Navbar from '../../Routes/Navbar';


const Home = () => {
    const backgroundImageUrl = 'url(../../../public/Rectangle1.png)';
    const overlayColor = 'rgba(0, 0, 0, 0.7)';

    const containerStyle = {
        backgroundImage: backgroundImageUrl,
        backgroundPosition: 'center center',
        height: '100vh',
        backgroundSize: 'cover',
        position: 'relative'
    };
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: overlayColor,
    };

    const textStyle = {
        color: 'white',         // Text color
        fontWeight: 'bold',    // Make the text bold
        fontSize: '24px',       // Adjust the font size as needed
        textAlign: 'center',   // Center-align the text
        position: 'absolute',
        fontFamily: 'Bebas Neue',           // Center horizontally
        transform: 'translate(-50%, -50%)', // Center the text perfectly
    };
    return (
        <div>
            <div className="" style={containerStyle}>
                <div style={overlayStyle}></div>

                <div className="relative text-white ">
                    <Navbar></Navbar>
                </div>
                <div className="relative text-white flex justify-center items-center h-[60vh] px-16">
                    <div className="flex flex-col gap-6 justify-center items-center w-2/5">
                        <p className='text-white text-8xl font-medium'>Cox's bazar</p>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    </div>
                    <div className="flex flex-col gap-6 justify-center items-center w-3/5">
                        <p className='text-white text-6xl font-extrabold'>Cox's bazar</p>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;