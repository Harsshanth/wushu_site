import React from 'react';
import image1 from './images/about1.jpg';
import image2 from './images/about2.jpg';
export default function About() {
    return (
        <div className="About">
            <div className="Block">
                <img className="img-fluid" src={image2} />
                <div>
                    <h2>Alex Appavu</h2>

                    <p>
                    "Hi I am Alex Appavu President of Tamil Nadu Wushu Association."
                    </p>
                </div>
            </div>
            <div className="Block">
                <div>
                    <h2>Johnson.P</h2>

                    <p>
                    Hi, I am Johnson.P General Secretary of Tamil Nadu Wushu Association . It was 3 long year being part of this organization  and improving new generation kids into the world of art . I welcome all to my association and have bright future.
                    </p>
                </div>
                <img src={image1} className="img-fluid" />
            </div>
        </div>
    );
}
