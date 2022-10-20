import {React,useEffect,useRef,useState} from 'react';
import { getDocument } from '../firebase/fireStore';
import image1 from './images/img2.jpeg';
import image2 from './images/img3.jpeg';

export default function Achivement() {
    const [data,setData] = useState([]);
    const[render,setRender] = useState(true);
    const renderState = useRef(true);
    var delayInMilliseconds = 400; //1 second

    
    useEffect( ()=>{
        if(render){
            const d=  getDocument("achievement").then(data =>{
                setData(data.Data);
                console.log(data);
            });
            
            setRender(false)
        }
    },[render])
    return (
        <div className="Achivement">
            <div className="row">
                {data==null?<>no Achivements</>:data.map((achievement)=>{
                    return (<div className="card">
                    
                    <img src={achievement.ImageUrl} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title text-center">{achievement.Title}</h3>

                        <p className="card-text">
                            {achievement.Discription}
                        </p>
                    </div>
                </div>)
                })}
                
                {/* <div className="card">
                    <img src={image1} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title text-center">Title</h3>

                        <p className="card-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maxime
                            deserunt natus saepe modi vel, quod officia voluptate libero sit
                            reprehenderit voluptatibus ullam beatae, ipsum ratione eum dicta quis
                            optio.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={image1} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title text-center">Title</h3>

                        <p className="card-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maxime
                            deserunt natus saepe modi vel, quod officia voluptate libero sit
                            reprehenderit voluptatibus ullam beatae, ipsum ratione eum dicta quis
                            optio.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={image1} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title text-center">Title</h3>
                        <p className="card-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maxime
                            deserunt natus saepe modi vel, quod officia voluptate libero sit
                            reprehenderit voluptatibus ullam beatae, ipsum ratione eum dicta quis
                            optio.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={image1} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title text-center">Title</h3>

                        <p className="card-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maxime
                            deserunt natus saepe modi vel, quod officia voluptate libero sit
                            reprehenderit voluptatibus ullam beatae, ipsum ratione eum dicta quis
                            optio.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={image1} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title text-center">Title</h3>

                        <p className="card-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maxime
                            deserunt natus saepe modi vel, quod officia voluptate libero sit
                            reprehenderit voluptatibus ullam beatae, ipsum ratione eum dicta quis
                            optio.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
