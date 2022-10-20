import React from 'react';
import image1 from './images/about1.jpg';
import image2 from './images/about2.jpg';
export default function About() {
    return (
        <div className="About">
            <div className="Block">
                <img className="img-fluid" src={image1} />
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
                <img src={image2} className="img-fluid" />
            </div>
        </div>
    );
}
