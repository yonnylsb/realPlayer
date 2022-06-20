import React, {FC, useState, useEffect} from 'react'
import {ref, set, onValue} from "firebase/database"
import { db } from './Components/firebase'
import './App.scss'

 const App:FC = () => {

  const [ progress, setProgress ] = useState<number>()
  const player = ref(db, 'player')

  useEffect(()=>{
    onValue(player, (snapshot) => {
      const data = snapshot.val();
      setProgress(data.progress)
    })
  }, [])

  const test = ()=>{
    set(ref(db, 'player'), {
      progress: 100
    });
  }

  return (
    <div>
      <iframe
        className='video_player'
        src="https://www.youtube.com/embed/M4yb_GsMF8A?autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  )
}

export default App
