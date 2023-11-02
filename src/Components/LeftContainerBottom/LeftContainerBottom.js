import './LeftContainerBottom.scss';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function LeftContainerBottom() {
    const [activity, setActivity] = useState([]); // State to track the selected option

    const handleSubmitRan = (event) => {
        event.preventDefault();
        async function RandomAct(){
            const act = await axios.get(`https://www.boredapi.com/api/activity/`)
            console.log(act.data)
            setActivity(act.data)
        }
        RandomAct()
  }
  
    const handleSubmitPart = (event) => {
        event.preventDefault();
        async function PartAct(){
        const formData = new FormData(event.target);
        const num = formData.get('number');
            const act = await axios.get(`https://www.boredapi.com/api/activity?participants=${num}`)
            setActivity(act.data)
        }
        PartAct()
  }
  
    const handleSubmitFree = (event) => {
        event.preventDefault();
        async function FreeAct(){
            const act = await axios.get(`https://www.boredapi.com/api/activity?price=0.0`)
            setActivity(act.data)
        }
        FreeAct()
  }


    return (
            <div className="container">
            <form onSubmit={handleSubmitRan}>
            <button type="submit">Random</button>
            </form>

            <form onSubmit={handleSubmitPart}>
                <div className="container__top">
                    <div className="container__card">
                        <h3 label for="number">Number of Participants</h3>
                        <input type="text" name="number" id="number" placeholder=" Add number of Participants" className="submitBox"/>
                        <button type="submit" className='button1'>Submit</button>
                    </div>
                </div>
                </form>
                <div className="container__bottom">
                    <div className="container__card2">
                        <h2>Price Point</h2>
                        <form onSubmit={handleSubmitFree}>
                        <button type="submit" className='button2'>Free</button>
                        </form>
                        <form onSubmit={handleSubmitFree}>
                        <button type="submit" className='button3'>Not Free</button>
                        </form>
                 </div>
            </div>
            </div>
    )
}

export default LeftContainerBottom;