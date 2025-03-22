
import './App.css'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'

function App() {
 

  return (
    <div className='bg-white'>
      <nav className=' text-black'><Navbar></Navbar></nav>
     
      <main className='max-w-7xl min-h-screen mx-auto px-4'>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default App
