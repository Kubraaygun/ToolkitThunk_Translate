import React from 'react'

const App = () => {
  return (
    <div id='main-page'>
      
      <div className='container'>
        <h1>Ceviri+</h1>
        {/* Ust Kisim */}
        <div className='upper'>
          <select>
            <option >Turkce</option>
          </select>
          <button>Degis</button>
          <select >
            <option>Ingilizce</option>
          </select>
        </div>
        {/*Orta Kisim */}
        <div className='middle'>
        <div>
          <textarea/>
        </div>

        <div>
          <textarea disabled/>
        </div>
        </div>
        {/*Alt Kisim */}
       <button>cevir</button>
      </div>
    </div>
  )
}

export default App