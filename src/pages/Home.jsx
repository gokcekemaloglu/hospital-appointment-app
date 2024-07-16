import React, { useState } from 'react'
import Data from "../helper/data"
import HastaEkle from '../components/HastaEkle'
import HastaListe from '../components/HastaListe'

const Home = () => {
    const [veri, setVeri] = useState(Data)

  return (
    <div>
        <HastaEkle veri={veri} setVeri={setVeri}/>
        <HastaListe veri={veri} setVeri={setVeri}/>
    </div>
  )
}

export default Home