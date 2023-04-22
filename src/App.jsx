import { Route, Routes } from 'react-router-dom'

import { Navbar, YourQueue } from './components'

function App() {

  return (
  <Routes>
    <Route element={<Navbar />}>
      <Route path='/' element={<YourQueue />}/>
      <Route path='/add' element='Add a Book'/>
      <Route path='/completed' element='Completed'/>
    </Route>
  </Routes>
  )
}

export default App
