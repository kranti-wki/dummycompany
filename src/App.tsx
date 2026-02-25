import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Accorden from './components/Accorden'
import Carasoul from './components/Carasoul'
import Table from './components/Table'
import Pagination from './components/Pagination'
import Herosection from './components/Herosection'
import Figma from './components/figmascreen2/Figma'
import Testinghooks from './components/react-hooks/Testinghooks'
import Scroll from './components/react-hooks/Scroll'
import Fatchapi from './components/react-hooks/Fatchapi'
import Usehoks from './components/react-hooks/Usehoks'
// import Card from './components/Card'

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter future={{v7_startTransition: true , v7_relativeSplatPath: true}}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accorden" element={<Accorden />} />
      <Route path="/carasoul" element={<Carasoul/>} />
      <Route path="/table" element={<Table/>} />
      <Route path="/pagenation" element={<Pagination/>} />
      <Route path="/herosection" element={<Herosection/>} />
      {/* <Route path="/card" element={<Card/>} /> */}
      <Route path='/figma' element={<Figma />} />
       <Route path='/form' element={<Testinghooks />} />
       <Route path='/scroll' element={<Scroll />} />
        <Route path='/fetchapi' element={<Fatchapi />} />
        <Route path='/usehoks' element={<Usehoks />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App