import logo from './logo.svg';
import {useEffect, useState} from 'react';
import './App.css';
const COUNTDOWN_INITIAL_TIME_SECONDS = 1*60;//25 MINUTES

function App() {
  const [secondsAmount,setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_SECONDS)
  const minutes= Math.floor(secondsAmount/60);
  const seconds =(secondsAmount % 60);
  
  useEffect(()=>{
   if(secondsAmount>0){
    setTimeout(()=>{
      setSecondsAmount(state =>state -1);
    },1000)
   }else{
     alert('Chegou ao fim!');
   }
   
  },[secondsAmount])
  return (
   <div>
     <span> {String(minutes).padStart(2,'0')}</span>
     <span>:</span>
     <span>{String(seconds).padStart(2,'0')}</span>

   </div>

  );
}

export default App;
