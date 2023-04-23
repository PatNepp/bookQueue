import { Route, Routes } from 'react-router-dom'

import { Navbar, AddBook } from './components'

function App() {

  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path='/' element='Your Queue'/>
        <Route path='/add' element={<AddBook />}/>
        <Route path='/completed' element='Completed'/>
      </Route>
    </Routes>
  )
}

export default App
