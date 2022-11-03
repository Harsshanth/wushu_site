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
                    <a  className="btn btn-primary" href={d.brochure} >Download</a>
                </div>
                {i%2==1?<img className="img-fluid" src={d.ImageUrl} />:<></>}
            </div>)
            })}
        </div>
    );
}
