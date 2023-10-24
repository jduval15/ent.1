import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArr from './services/getRandomFromArr'
import Phrase from './components/Phrase'
import ButtonPhrase from './components/ButtonPhrase'
import bgArr from './utils/bgArr.json'

function App() {

  const quote = getRandomFromArr(phrases)

  const [phraseRandom, setPhraseRandom] = useState(quote)
  const [bgApp, setBgApp] = useState(getRandomFromArr(bgArr))

  const objStyle = {
    backgroundImage: `url('../fondo${bgApp}.jpg')`
    
  }
  
  
  
  return (
    <div style={objStyle} className='app'>
      <h1 className='app__tittle'>Fortune Cookie</h1>
      <article className='app__card'>
      <Phrase 
      phraseRandom = {phraseRandom}
      />
      < ButtonPhrase
      setPhraseRandom = {setPhraseRandom}
      setBgApp = {setBgApp}
      />
      </article>
    </div>
    
    
  )
}

export default App
