import './LeftContainerBottom.scss';
import React, { useState } from 'react';
import axios from 'axios';

function LeftContainerBottom({ activity, setActivity }) {

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
  const handleSubmitNotFree = (event) => {
    event.preventDefault();
    async function NotFreeAct(){
        const act = await axios.get(`https://www.boredapi.com/api/activity?minprice=0.1&maxprice=1`)
        setActivity(act.data)
        console.log(act.data)
    }
    NotFreeAct()
}
    return (
        <body>
            <div className="container">
            <form onSubmit={handleSubmitRan}>
            <button className='button1' type="submit">Random</button>
            </form>
            <form onSubmit={handleSubmitPart}>
                <div className="container__top">
                    <h3 className='container__top--title' label for="number">Number of Participants</h3>
                    <input type="text" name="number" id="number" placeholder="  Add number of Participants" className="container__top--form"/>
                    <button className='container__top--button' type="submit">Submit</button>
                </div>
                </form>
                
                <div className="container__bottom">
                    <div className="container__card2">
                        <h2 className='container__card2--title'>Price Point</h2>
                        <form onSubmit={handleSubmitFree}>
                        <button type="submit" className='button2'>Free</button>
                        </form>
                        <form onSubmit={handleSubmitNotFree}>
                        <button type="submit" className='button3'>Not Free</button>
                        </form>
                 </div>
            </div>
            </div>
        </body>
    )
}

export default LeftContainerBottom;