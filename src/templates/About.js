import React from 'react';
import image1 from './images/about1.jpg';
import image2 from './images/about2.jpg';
import official from './files/officials.pdf';
export default function About() {
    return (
        <div className="About">
            <div className="Block">
                <img className="img-fluid" src={image2} />
                <div>
                    <h2>WUSHU:</h2>

                    <p>
                        "Wushu" is the Chinese term for "martial arts" (武 "Wu" = military or
                        martial, 術 "Shu" = art). In contemporary times, Wushu has become an
                        international sport under the International Wushu Federation (IWUF), which
                        holds the World Wushu Championships every two years. Wushu is an official
                        event at the Asian Games, Southeast Asian Games, World Combat Games, and in
                        various other multi-sport events.
                    </p>
                </div>
            </div>
            <div className="Block">
                <div>
                    <h2>Johnson.P</h2>

                    <p>
                    Hi, I am General Secretary of Tamil Nadu Wushu Association . It was 3 long year being part of this organization  and improving new generation kids into the world of art . I welcome all to my association and have bright future.
                    </p>
                </div>
                <img src={image1} className="img-fluid" />
            </div>
            <div className="Block">
                <img src={image1} className="img-fluid" />
                <div>
                    <h2>Johnson.P</h2>

                    <p>
                    Hi, I am General Secretary of Tamil Nadu Wushu Association . It was 3 long year being part of this organization  and improving new generation kids into the world of art . I welcome all to my association and have bright future.
                    </p>
                </div>
                
            </div>
            <center><a href={official} target='_blank' download= 'official.pdf'><h4>VIEW OTHER OFFICIALS</h4></a></center>
        </div>
    );
}
