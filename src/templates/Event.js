import {React,useState,useEffect,useRef} from 'react';
import { getDocument } from '../firebase/fireStore';

export default function Event() {
    const [data,setData] = useState([]);
    const[render,setRender] = useState(true);
    const renderState = useRef(true);
    var delayInMilliseconds = 400; //1 second

    
    useEffect( ()=>{
        if(render){
            const d=  getDocument("list").then(data =>{
                setData(data.Data);
                console.log(data);
            });
            
            setRender(false)
        }
    },[render])
    return (
        <div className="Event">
            {data.map((d,i)=>{
                return (<div className="Block">
                {i%2==0?<img className="img-fluid" src={d.ImageUrl} />:<></>}
                <div>
                    <h2>{d.Title}</h2>

                    <p>
                        {d.Discription}
                    </p>
                    <button className="btn btn-primary">Download</button>
                </div>
                {i%2==1?<img className="img-fluid" src={d.ImageUrl} />:<></>}
            </div>)
            })}
            
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
                    <button className="btn btn-primary">Download</button>
                </div>
                <img src={image2} className="img-fluid" />
            </div>
        </div>
    );
}
