import {useState} from 'react'
export const Message = () => {
    const [message, setMessage]= useState("Welcome Visitors")
    return (
     <div>
        <h1>
            {message}
        </h1>
        <button onClick={()=> setMessage('Thnak you for subscribing.')}>Subscribe</button>
        
    </div>   
    );
}

//export default Greet;