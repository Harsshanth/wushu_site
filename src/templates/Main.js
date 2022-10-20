import React from 'react';
import mainimg from './images/img23.jpg';
import img2 from './images/img 33.jpg';

export default function main() {
    return (
        <div className="Main ">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block " src={mainimg} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block " src={img2} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block " src={mainimg} alt="First slide" />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div>
                <h2>Tamilnadu Wushu Association</h2>
                <p>
                    Wushu is the recognized sport in Tamil nadu . Every year the Wushu Association
                    of Tamil nadu organizes a state match to find the player to represent in the
                    National Level Wushu Tournaments. Tamil nadu Wushu Association is recognized by
                    the Tamil nadu olympic Association, Sports Development Authority of India,
                    Department of Youth Affairs & Sports Ministry of Human Resource Development,
                    Govt. of India, Indian Olympic Association .It is affiliated to the Wushu
                    Association of India.
                </p>
                <h2>WUSHU:</h2>
                <p>
                    "Wushu" is the Chinese term for "martial arts" (武 "Wu" = military or martial,
                    術 "Shu" = art). In contemporary times, Wushu has become an international sport
                    under the International Wushu Federation (IWUF), which holds the World Wushu
                    Championships every two years. Wushu is an official event at the Asian Games,
                    Southeast Asian Games, World Combat Games, and in various other multi-sport
                    events.
                </p>
                <h2>Sanda(Sanshaou):</h2>
                <p>
                    Sanshou or an "unsanctioned fight" is a Chinese self-defense system and combat
                    sport. Sanshou is a martial art which was originally developed by the Chinese
                    military based upon the study and practices of traditional Kung fu and modern
                    combat fighting techniques; it combines full-contact kickboxing, which include
                    close range and rapid successive punches and kicks, with wrestling, takedowns,
                    throws, sweeps, kick catches, and in some competitions, even elbow and knee
                    strikes. Not seen as a style itself, rather it is considered as just one of the
                    two components of Chinese martial arts training and is often taught alongside
                    with taolu (forms) training. However, as part of the development of sport wushu
                    by the Chinese government, a standard curriculum for sanshou was developed. It
                    is to this standard curriculum that the term "Sanshou" is usually applied. This
                    curriculum was developed with reference to traditional Chinese martial arts.
                    This general Sanshou curriculum varies in its different forms, as the Chinese
                    government developed a version for civilians for self-defense and as a sport.
                </p>
                <h2>Taolu:</h2>
                <p>
                    Taolu, refers to the set routine (form) practice component of wushu. Taolu
                    routines comprise of a continuously connected set of pre-determined techniques,
                    choreographed according to certain principles and philosophies which incorporate
                    techniques and stylistic principles of attack and defense. These include hand
                    techniques, leg techniques, jumps, sweeps, stances & footwork, seizing, throwing
                    & wrestling, balances etc. Traditionally, Taolu routines were originally
                    compiled to preserve the techniques and tactics of a particular lineage or
                    system, and would gradually improve a practitioner's flexibility, stamina,
                    strength, speed, balance and co-ordination, and would "imprint" a tactical order
                    into practitioners. Taolu routines include individual routines and group
                    routines, as well as partner/duel routines with 2 or more practitioners
                    involved. They have a rich and diverse content utilizing a wide variety of
                    techniques and includes both bare-handed routines and those performed with
                    weapons. Sport wushu has developed from traditional wushu and is presented to
                    the world in the form of a modern Olympic sport with a perfect combination of
                    ancient practices and modern sports principles. Athletes perform routines
                    (barehanded or with weaponry) based on specific rules, highlighting their
                    athletic strengths. Routines are appraised by a panel of judges who evaluate
                    different aspects of a performance, namely quality of movements, overall
                    performance and degree of difficulty, and award a score based on an athlete's
                    performance. Individual taolu routines include optional routines, compulsory
                    routines, choreographed duel/sparring routines and group routines. Taolu
                    competition takes place in a specialized 8m x 14m arena, which comprises of high
                    density foam covered by a low-static carpet.
                </p>
            </div>
        </div>
    );
}
