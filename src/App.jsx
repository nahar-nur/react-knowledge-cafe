import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Ccomponents/Header/Header'
import Blogs from './Ccomponents/Blogs/Bogs'
import Bookmarks from './Ccomponents/Bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
