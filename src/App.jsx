import NavBarContainer from './components/NavBar.Container'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router'

function App () {
  return (
    <BrowserRouter>
      <NavBarContainer />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<div style={{padding: '20px'}}>404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App